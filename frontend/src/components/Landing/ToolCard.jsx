import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import "./ToolCard.css";

const toolAnimations = {
  "pdf-to-png": (
    <div className="tc-scene tc-pdf-png-scene">
      <div className="tc-pdf-side">
        <div className="tc-doc tc-doc--pdf">
          <span className="tc-doc__tag">PDF</span>
        </div>
      </div>
      <div className="tc-arrow">›</div>
      <div className="tc-png-side">
        <div className="tc-doc tc-doc--png">
          <span className="tc-doc__tag">PNG</span>
          <div className="tc-pixel-grid">
            {["#378ADD","#1D9E75","#EF9F27","#378ADD",
              "#1D9E75","#EF9F27","#378ADD","#1D9E75",
              "#EF9F27","#378ADD","#1D9E75","#EF9F27"].map((c, i) => (
              <div key={i} className="tc-pixel" style={{ background: c }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  ),

  "image-to-pdf": (
    <div className="tc-scene tc-img-pdf-scene">
      <div className="tc-img-side">
        <div className="tc-photo-frame">
          <div className="tc-photo-sky" />
          <div className="tc-photo-sun" />
          <svg viewBox="0 0 40 16" width="40" height="16" className="tc-photo-hills">
            <polygon points="0,16 10,4 18,9 28,2 40,16" fill="#5DCAA5" opacity="0.8" />
          </svg>
        </div>
      </div>
      <div className="tc-arrow">›</div>
      <div className="tc-pdf-out-side">
        <div className="tc-doc tc-doc--pdf">
          <span className="tc-doc__tag">PDF</span>
          <div className="tc-pdf-lines">
            <div className="tc-pdf-line" />
            <div className="tc-pdf-line" />
            <div className="tc-pdf-line" />
          </div>
        </div>
      </div>
    </div>
  ),

  "pdf-merge": (
    <div className="tc-scene tc-merge-scene">
      <div className="tc-merge-stack">
        <div className="tc-doc tc-doc--merge tc-doc--merge-1">
          <span className="tc-doc__tag">PDF</span>
        </div>
        <div className="tc-doc tc-doc--merge tc-doc--merge-2">
          <span className="tc-doc__tag">PDF</span>
        </div>
        <div className="tc-doc tc-doc--merge tc-doc--merge-3">
          <span className="tc-doc__tag">PDF</span>
        </div>
      </div>
      <div className="tc-arrow">›</div>
      <div className="tc-doc tc-doc--merged">
        <span className="tc-doc__tag">PDF</span>
        <div className="tc-merge-lines">
          <div className="tc-merge-line tc-merge-line--1" />
          <div className="tc-merge-line tc-merge-line--2" />
          <div className="tc-merge-line tc-merge-line--3" />
        </div>
      </div>
    </div>
  ),

  "pdf-sign": (
    <div className="tc-scene tc-sign-scene">
      <div className="tc-sign-doc">
        <div className="tc-sign-lines">
          <div className="tc-sign-line" />
          <div className="tc-sign-line" />
          <div className="tc-sign-line" />
        </div>
        <div className="tc-sign-area">
          <svg className="tc-signature" viewBox="0 0 60 24" width="60" height="24">
            <path
              className="tc-sig-path"
              d="M4,18 C10,6 16,20 22,12 C28,4 32,20 38,14 C44,8 50,18 56,10"
              fill="none" stroke="#534AB7" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="tc-sign-badge">✓ Signed</div>
      </div>
    </div>
  ),

  "image-compress": (
    <div className="tc-scene tc-compress-scene">
      <div className="tc-compress-wrap">
        <div className="tc-compress-photo">
          <div className="tc-compress-sky" />
          <div className="tc-compress-sun" />
          <svg viewBox="0 0 44 18" width="44" height="18" className="tc-compress-hills">
            <polygon points="0,18 11,5 20,10 30,2 44,18" fill="#5DCAA5" opacity="0.7" />
          </svg>
        </div>
        <div className="tc-compress-bar-wrap">
          <div className="tc-compress-bar-bg">
            <div className="tc-compress-bar-fill" />
          </div>
          <div className="tc-compress-labels">
            <span className="tc-compress-before">4.2 MB</span>
            <span className="tc-compress-after">1.1 MB</span>
          </div>
        </div>
      </div>
    </div>
  ),

  "image-upscale": (
  <div className="tc-scene tc-upscale-scene">
    <div className="tc-upscale-wrap">
      <div className="tc-upscale-frame tc-upscale-frame--small">
        <div className="tc-upscale-sky" />
        <div className="tc-upscale-sun" />
        <svg viewBox="0 0 24 10" width="24" height="10">
          <polygon points="0,10 6,3 11,6 16,1 24,10" fill="#5DCAA5" opacity="0.8" />
        </svg>
      </div>
      <div className="tc-upscale-arrow">↗</div>
      <div className="tc-upscale-frame tc-upscale-frame--big">
        <div className="tc-upscale-sky" />
        <div className="tc-upscale-sun" />
        <svg viewBox="0 0 40 16" width="40" height="16">
          <polygon points="0,16 10,4 18,9 28,2 40,16" fill="#5DCAA5" opacity="0.8" />
        </svg>
      </div>
      <div className="tc-upscale-badge">HD</div>
    </div>
  </div>
),

"image-to-webp": (
  <div className="tc-scene tc-webp-scene">
    <div className="tc-webp-wrap">
      <div className="tc-webp-photo">
        <div className="tc-webp-sky" />
        <div className="tc-webp-sun" />
        <svg viewBox="0 0 40 16" width="40" height="16" className="tc-webp-hills">
          <polygon points="0,16 10,4 18,9 28,2 40,16" fill="#5DCAA5" opacity="0.8" />
        </svg>
      </div>
      <div className="tc-arrow">›</div>
      <div className="tc-webp-badge-wrap">
        <div className="tc-webp-doc">
          <span className="tc-webp-tag">WebP</span>
        </div>
      </div>
    </div>
  </div>
),

"image-to-jpg": (
  <div className="tc-scene tc-jpg-scene">
    <div className="tc-jpg-wrap">
      <div className="tc-jpg-stack">
        <div className="tc-jpg-frame tc-jpg-frame--back">
          <div className="tc-jpg-sky" />
          <div className="tc-jpg-sun" />
        </div>
        <div className="tc-jpg-frame tc-jpg-frame--front">
          <div className="tc-jpg-sky" />
          <div className="tc-jpg-sun" style={{ right: 6, top: 5, width: 9, height: 9 }} />
          <svg viewBox="0 0 48 18" width="48" height="18" className="tc-jpg-hills">
            <polygon points="0,18 10,5 20,10 32,2 48,18" fill="#D85A30" opacity="0.7" />
          </svg>
        </div>
      </div>
      <div className="tc-jpg-badge">JPG</div>
    </div>
  </div>
),

"image-to-grayscale": (
  <div className="tc-scene tc-grayscale-scene">
    <div className="tc-grayscale-wrap">
      <div className="tc-grayscale-photo tc-grayscale-photo--color">
        <div className="tc-gs-sky tc-gs-sky--color" />
        <div className="tc-gs-sun" />
        <svg viewBox="0 0 40 16" width="40" height="16" className="tc-gs-hills tc-gs-hills--color">
          <polygon points="0,16 10,4 18,9 28,2 40,16" fill="#5DCAA5" opacity="0.8" />
        </svg>
      </div>
      <div className="tc-arrow">›</div>
      <div className="tc-grayscale-photo tc-grayscale-photo--gray">
        <div className="tc-gs-sky tc-gs-sky--gray" />
        <div className="tc-gs-sun tc-gs-sun--gray" />
        <svg viewBox="0 0 40 16" width="40" height="16" className="tc-gs-hills tc-gs-hills--gray">
          <polygon points="0,16 10,4 18,9 28,2 40,16" fill="#888" opacity="0.8" />
        </svg>
      </div>
    </div>
  </div>
),

"remove-bg": (
  <div className="tc-scene tc-removebg-scene">
    <div className="tc-removebg-wrap">
      <div className="tc-rb-checker" />
      <div className="tc-rb-bg" />
      <div className="tc-rb-person">
        <div className="tc-rb-head" />
        <div className="tc-rb-torso" />
      </div>
      <div className="tc-rb-check">✓</div>
    </div>
  </div>
),

"rotate-flip": (
  <div className="tc-scene tc-rotate-scene">
    <div className="tc-rotate-wrap">
      <div className="tc-rot-frame">
        <div className="tc-rot-sky" />
        <div className="tc-rot-sun" />
        <svg viewBox="0 0 48 18" width="48" height="18" className="tc-rot-hills">
          <polygon points="0,18 11,5 20,11 30,2 48,18" fill="#EF9F27" opacity="0.7" />
        </svg>
      </div>
      <div className="tc-rot-arrow">↻</div>
    </div>
  </div>
),

"image-resize": (
  <div className="tc-scene tc-resize-scene">
    <div className="tc-resize-wrap">
      <div className="tc-resize-frame tc-resize-frame--big">
        <div className="tc-resize-sky" />
        <div className="tc-resize-sun" />
        <svg viewBox="0 0 48 18" width="48" height="18" className="tc-resize-hills">
          <polygon points="0,18 11,5 20,11 30,2 48,18" fill="#5DCAA5" opacity="0.7" />
        </svg>
      </div>
      <div className="tc-resize-frame tc-resize-frame--small">
        <div className="tc-resize-sky" />
        <div className="tc-resize-sun" />
        <svg viewBox="0 0 28 10" width="28" height="10" className="tc-resize-hills">
          <polygon points="0,10 6,3 11,6 16,1 28,10" fill="#5DCAA5" opacity="0.7" />
        </svg>
      </div>
      <div className="tc-resize-badge">↔</div>
    </div>
  </div>
),

"image-dpi": (
  <div className="tc-scene tc-dpi-scene">
    <div className="tc-dpi-wrap">
      <div className="tc-dpi-frame">
        <div className="tc-dpi-dots">
          {Array.from({ length: 9 }).map((_, i) => (
            <div key={i} className="tc-dpi-dot tc-dpi-dot--low" />
          ))}
        </div>
      </div>
      <div className="tc-arrow">›</div>
      <div className="tc-dpi-frame">
        <div className="tc-dpi-dots">
          {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} className="tc-dpi-dot tc-dpi-dot--high" />
          ))}
        </div>
      </div>
      <div className="tc-dpi-label">72 → 300 DPI</div>
    </div>
  </div>
),

"image-metadata": (
  <div className="tc-scene tc-metadata-scene">
    <div className="tc-meta-shell">
      <div className="tc-meta-rows">
        {[100, 60, 80, 50, 70].map((w, i) => (
          <div key={i} className="tc-meta-row">
            <div className="tc-meta-key" />
            <div className="tc-meta-val" style={{ width: `${w}%` }} />
          </div>
        ))}
      </div>
      <div className="tc-meta-scanner" />
    </div>
  </div>
),

"image-to-base64": (
  <div className="tc-scene tc-base64-scene">
    <div className="tc-b64-wrap">
      <div className="tc-b64-photo">
        <div className="tc-b64-sky" />
        <div className="tc-b64-sun" />
        <svg viewBox="0 0 40 16" width="40" height="16" className="tc-b64-hills">
          <polygon points="0,16 10,4 18,9 28,2 40,16" fill="#5DCAA5" opacity="0.8" />
        </svg>
      </div>
      <div className="tc-arrow">›</div>
      <div className="tc-b64-code">
        <div className="tc-b64-line" />
        <div className="tc-b64-line" />
        <div className="tc-b64-line" />
        <div className="tc-b64-line" />
        <div className="tc-b64-cursor" />
      </div>
    </div>
  </div>
),
};

const ToolCard = ({ tool, index }) => (
  <Link
    to={tool.path}
    className="group relative p-8 rounded-2xl bg-white shadow-sm border border-slate-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-slate-300 animate-fade-in-up flex flex-col"
    style={{ animationDelay: `${1000 + index * 100}ms` }}
  >
    <div
      className={`absolute inset-0 rounded-2xl bg-linear-to-br ${tool.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}
    />

    <div className="tc-stage mb-6">
      {toolAnimations[tool.id] ?? (
        <div
          className={`w-14 h-14 rounded-xl bg-linear-to-br ${tool.iconGradient} p-px tc-icon-float`}
        >
          <div className="w-full h-full rounded-xl bg-white flex items-center justify-center">
            {React.cloneElement(tool.icon, { className: "w-7 h-7 text-slate-800" })}
          </div>
        </div>
      )}
    </div>

    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-slate-900 group-hover:to-blue-700 group-hover:bg-clip-text transition-all duration-300">
      {tool.name}
    </h3>
    <p className="text-slate-600 text-sm leading-relaxed flex-1">
      {tool.description}
    </p>

    <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
      <ArrowRight className="w-6 h-6 text-blue-600" />
    </div>
  </Link>
);

export default ToolCard;