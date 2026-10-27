import { Renderer, Program, Mesh, Triangle } from 'https://cdn.jsdelivr.net/npm/ogl@1.0.11/src/index.js';

const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return [1, 1, 1];
  return [
    parseInt(result[1], 16) / 255,
    parseInt(result[2], 16) / 255,
    parseInt(result[3], 16) / 255
  ];
};

const vertex = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const fragment = `#version 300 es
precision highp float;
uniform vec2 iResolution;
uniform float iTime;
uniform float uTimeSpeed;
uniform float uColorBalance;
uniform float uWarpStrength;
uniform float uWarpFrequency;
uniform float uWarpSpeed;
uniform float uWarpAmplitude;
uniform float uBlendAngle;
uniform float uBlendSoftness;
uniform float uRotationAmount;
uniform float uNoiseScale;
uniform float uGrainAmount;
uniform float uGrainScale;
uniform float uGrainAnimated;
uniform float uContrast;
uniform float uGamma;
uniform float uSaturation;
uniform vec2 uCenterOffset;
uniform float uZoom;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform float uLightMode;
out vec4 fragColor;
#define S(a,b,t) smoothstep(a,b,t)
mat2 Rot(float a){float s=sin(a),c=cos(a);return mat2(c,-s,s,c);}
vec2 hash(vec2 p){p=vec2(dot(p,vec2(2127.1,81.17)),dot(p,vec2(1269.5,283.37)));return fract(sin(p)*43758.5453);}
float noise(vec2 p){vec2 i=floor(p),f=fract(p),u=f*f*(3.0-2.0*f);float n=mix(mix(dot(-1.0+2.0*hash(i+vec2(0.0,0.0)),f-vec2(0.0,0.0)),dot(-1.0+2.0*hash(i+vec2(1.0,0.0)),f-vec2(1.0,0.0)),u.x),mix(dot(-1.0+2.0*hash(i+vec2(0.0,1.0)),f-vec2(0.0,1.0)),dot(-1.0+2.0*hash(i+vec2(1.0,1.0)),f-vec2(1.0,1.0)),u.x),u.y);return 0.5+0.5*n;}
void mainImage(out vec4 o, vec2 C){
  float t=iTime*uTimeSpeed;
  vec2 uv=C/iResolution.xy;
  float ratio=iResolution.x/iResolution.y;
  vec2 tuv=uv-0.5+uCenterOffset;
  tuv/=max(uZoom,0.001);

  float degree=noise(vec2(t*0.1,tuv.x*tuv.y)*uNoiseScale);
  tuv.y*=1.0/ratio;
  tuv*=Rot(radians((degree-0.5)*uRotationAmount+180.0));
  tuv.y*=ratio;

  float frequency=uWarpFrequency;
  float ws=max(uWarpStrength,0.001);
  float amplitude=uWarpAmplitude/ws;
  float warpTime=t*uWarpSpeed;
  tuv.x+=sin(tuv.y*frequency+warpTime)/amplitude;
  tuv.y+=sin(tuv.x*(frequency*1.5)+warpTime)/(amplitude*0.5);

  vec3 colLav=uColor1;
  vec3 colOrg=uColor2;
  vec3 colDark=uColor3;
  float b=uColorBalance;
  float s=max(uBlendSoftness,0.0);
  mat2 blendRot=Rot(radians(uBlendAngle));
  float blendX=(tuv*blendRot).x;
  float edge0=-0.3-b-s;
  float edge1=0.2-b+s;
  float v0=0.5-b+s;
  float v1=-0.3-b-s;
  vec3 layer1=mix(colDark,colOrg,S(edge0,edge1,blendX));
  vec3 layer2=mix(colOrg,colLav,S(edge0,edge1,blendX));
  vec3 col=mix(layer1,layer2,S(v0,v1,tuv.y));

  vec2 grainUv=uv*max(uGrainScale,0.001);
  if(uGrainAnimated>0.5){grainUv+=vec2(iTime*0.05);}
  float grain=fract(sin(dot(grainUv,vec2(12.9898,78.233)))*43758.5453);
  col+=(grain-0.5)*uGrainAmount;

  col=(col-0.5)*uContrast+0.5;
  float luma=dot(col,vec3(0.2126,0.7152,0.0722));
  col=mix(vec3(luma),col,uSaturation);
  col=pow(max(col,0.0),vec3(1.0/max(uGamma,0.001)));
  col=clamp(col,0.0,1.0);
  if(uLightMode>0.5){
    float energy=max(max(col.r,col.g),col.b);
    vec3 hue=col/max(energy,0.001);
    float chroma=length(col-vec3(dot(col,vec3(0.333333))));
    float coverage=clamp(0.12+chroma*1.15+energy*0.18,0.0,0.88);
    col=mix(vec3(1.0),clamp(hue*0.58+col*0.18,0.0,1.0),coverage);
  }

  o=vec4(col,1.0);
}
void main(){
  vec4 o=vec4(0.0);
  mainImage(o,gl_FragCoord.xy);
  fragColor=o;
}
`;

const DEFAULTS = {
  color1: '#404040',
  color2: '#000000',
  color3: '#404040',
  timeSpeed: 0.25,
  colorBalance: 0.0,
  warpStrength: 1.0,
  warpFrequency: 5.0,
  warpSpeed: 2.0,
  warpAmplitude: 50.0,
  blendAngle: 0.0,
  blendSoftness: 0.05,
  rotationAmount: 500.0,
  noiseScale: 2.0,
  grainAmount: 0.1,
  grainScale: 2.0,
  grainAnimated: false,
  contrast: 1.5,
  gamma: 1.0,
  saturation: 1.0,
  centerX: 0.0,
  centerY: 0.0,
  zoom: 0.9,
  lightMode: false
};

/** Cap DPR so desktop retina does not explode fragment cost. */
const MAX_DPR = 1.5;
/** Max edge length of the WebGL drawing buffer (device pixels). */
const MAX_BUFFER_EDGE = 1600;
/** Target frame interval (~30 FPS). */
const FRAME_MS = 1000 / 30;

/**
 * Capability gate — call before creating WebGL / importing this module.
 * Mobile / low-end / reduced-motion → skip (CSS hero background only).
 */
export function shouldRunGrainient() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
  if (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) return false;
  if (window.matchMedia('(max-width: 768px)').matches) return false;
  if (navigator.deviceMemory && navigator.deviceMemory <= 4) return false;
  return true;
}

function resolveDpr(cssW, cssH) {
  let dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
  const longest = Math.max(cssW, cssH, 1);
  if (longest * dpr > MAX_BUFFER_EDGE) {
    dpr = MAX_BUFFER_EDGE / longest;
  }
  return Math.max(0.5, dpr);
}

export function initGrainient(container, options = {}) {
  if (!container) return () => {};

  // Gate again before any WebGL work (in case caller skipped the pre-check).
  if (!shouldRunGrainient()) {
    container.classList.add('grainient-container', 'grainient-container--skipped');
    return () => {};
  }

  const opts = { ...DEFAULTS, ...options };
  container.classList.add('grainient-container');

  let renderer;
  try {
    renderer = new Renderer({
      webgl: 2,
      alpha: true,
      antialias: false,
      dpr: Math.min(window.devicePixelRatio || 1, MAX_DPR)
    });
  } catch (err) {
    console.warn('[Grainient] WebGL2 unavailable:', err);
    return () => {};
  }

  const gl = renderer.gl;
  const canvas = gl.canvas;
  canvas.style.position = 'absolute';
  canvas.style.inset = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.display = 'block';
  canvas.style.pointerEvents = 'none';
  container.appendChild(canvas);

  const geometry = new Triangle(gl);
  const program = new Program(gl, {
    vertex,
    fragment,
    uniforms: {
      iTime: { value: 0 },
      iResolution: { value: new Float32Array([1, 1]) },
      uTimeSpeed: { value: opts.timeSpeed },
      uColorBalance: { value: opts.colorBalance },
      uWarpStrength: { value: opts.warpStrength },
      uWarpFrequency: { value: opts.warpFrequency },
      uWarpSpeed: { value: opts.warpSpeed },
      uWarpAmplitude: { value: opts.warpAmplitude },
      uBlendAngle: { value: opts.blendAngle },
      uBlendSoftness: { value: opts.blendSoftness },
      uRotationAmount: { value: opts.rotationAmount },
      uNoiseScale: { value: opts.noiseScale },
      uGrainAmount: { value: opts.grainAmount },
      uGrainScale: { value: opts.grainScale },
      uGrainAnimated: { value: opts.grainAnimated ? 1.0 : 0.0 },
      uContrast: { value: opts.contrast },
      uGamma: { value: opts.gamma },
      uSaturation: { value: opts.saturation },
      uCenterOffset: { value: new Float32Array([opts.centerX, opts.centerY]) },
      uZoom: { value: opts.zoom },
      uColor1: { value: new Float32Array(hexToRgb(opts.color1)) },
      uColor2: { value: new Float32Array(hexToRgb(opts.color2)) },
      uColor3: { value: new Float32Array(hexToRgb(opts.color3)) },
      uLightMode: { value: opts.lightMode ? 1.0 : 0.0 }
    }
  });

  const mesh = new Mesh(gl, { geometry, program });

  const setSize = () => {
    const rect = container.getBoundingClientRect();
    const parent = container.parentElement;
    const parentRect = parent ? parent.getBoundingClientRect() : null;
    const w = Math.max(
      1,
      Math.floor(rect.width || parentRect?.width || container.clientWidth || 1)
    );
    const h = Math.max(
      1,
      Math.floor(rect.height || parentRect?.height || container.clientHeight || 1)
    );
    renderer.dpr = resolveDpr(w, h);
    renderer.setSize(w, h);
    const res = program.uniforms.iResolution.value;
    res[0] = gl.drawingBufferWidth;
    res[1] = gl.drawingBufferHeight;
  };

  const renderFrame = (t) => {
    program.uniforms.iTime.value = t;
    renderer.render({ scene: mesh });
  };

  let raf = 0;
  let lastRender = 0;
  let isVisible = true;
  let isPageVisible = !document.hidden;
  const t0 = performance.now();

  const ro = new ResizeObserver(() => {
    setSize();
    if (raf === 0) {
      renderFrame(program.uniforms.iTime.value);
    }
  });
  ro.observe(container);
  if (container.parentElement) ro.observe(container.parentElement);

  const loop = (now) => {
    raf = requestAnimationFrame(loop);
    if (now - lastRender < FRAME_MS) return;
    lastRender = now;
    renderFrame((now - t0) * 0.001);
  };

  const tryStart = () => {
    if (isVisible && isPageVisible && raf === 0) {
      setSize();
      lastRender = 0;
      raf = requestAnimationFrame(loop);
    }
  };

  const tryStop = () => {
    if (raf !== 0) {
      cancelAnimationFrame(raf);
      raf = 0;
    }
  };

  const io = new IntersectionObserver(
    ([entry]) => {
      isVisible = entry.isIntersecting && entry.intersectionRatio > 0;
      if (isVisible) {
        setSize();
        tryStart();
      } else {
        tryStop();
      }
    },
    { threshold: 0, rootMargin: '0px' }
  );
  io.observe(container);

  const onVisibility = () => {
    isPageVisible = !document.hidden;
    isPageVisible ? tryStart() : tryStop();
  };
  document.addEventListener('visibilitychange', onVisibility);

  setSize();
  renderFrame(0);
  tryStart();

  return () => {
    tryStop();
    ro.disconnect();
    io.disconnect();
    document.removeEventListener('visibilitychange', onVisibility);
    try {
      container.removeChild(canvas);
    } catch {
      /* ignore */
    }
  };
}
