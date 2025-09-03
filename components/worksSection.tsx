'use client';

import { useEffect, useState, useRef } from "react";
import { worksData, WorkItem } from "./worksData";
import Image from "next/image";

export default function WorksSection() {
    const [selected, setSelected] = useState<WorkItem | null>(null);

    useEffect(() => {
        document.body.style.overflow = selected ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [selected]);

    return (
        <section id="works" className="section works">
            <div className="works-grid">
                {worksData.map((work) => (
                    <button key={work.id} className="work-thumb" onClick={() => setSelected(work)}>
                        <Image src={work.thumb} alt={work.title} width={300} height={200} className="thumb-img" />
                        <p className="thumb-title">{work.title}</p>
                    </button>
                ))}
            </div>

            {selected && (
                <div className="modal-backdrop" onClick={() => setSelected(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h3>{selected.title}</h3>
                        <p className="description">{selected.description}</p>

                        {/* 使用言語 */}
                        <div className="modal-languages">
                            <h4>使用言語</h4>
                            <ul>
                                {selected.languages?.map((lang, i) => <li key={i}>{lang}</li>)}
                            </ul>
                        </div>

                        <a href={selected.url} target="_blank" rel="noopener noreferrer" className="modal-link">
                            サイトへ
                        </a>

                        {/* ★ カルーセル */}
                        <ModalCarousel
                            images={selected.gallery?.length ? selected.gallery : [selected.image]}
                        />

                        <button className="close-btn" onClick={() => setSelected(null)}>閉じる</button>
                    </div>
                </div>
            )}
        </section>
    );
}

/** --- シンプルなカルーセル（左右・ドット・スワイプ対応） --- */
function ModalCarousel({ images }: { images: string[] }) {
    const [idx, setIdx] = useState(0);
    const total = images.length;
    const wrap = (n: number) => (n + total) % total;

    // キーボード操作
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') setIdx(i => wrap(i + 1));
            if (e.key === 'ArrowLeft') setIdx(i => wrap(i - 1));
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [total]);

    // スワイプ対応
    const startX = useRef<number | null>(null);
    const onTouchStart = (e: React.TouchEvent) => { startX.current = e.touches[0].clientX; };
    const onTouchEnd = (e: React.TouchEvent) => {
        if (startX.current == null) return;
        const dx = e.changedTouches[0].clientX - startX.current;
        if (Math.abs(dx) > 40) setIdx(i => wrap(i + (dx < 0 ? 1 : -1)));
        startX.current = null;
    };

    return (
        <div className="modal-gallery" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
            <button className="carousel-nav prev" aria-label="前へ" onClick={() => setIdx(i => wrap(i - 1))}>‹</button>
            <div className="carousel-stage uniform">
                <div className="img-frame">
                    <Image
                        key={images[idx]}
                        src={images[idx]}
                        alt=""
                        width={600}
                        height={600}
                        className="gallery-img"
                        priority={false}
                    />
                </div>
            </div>
            <button className="carousel-nav next" aria-label="次へ" onClick={() => setIdx(i => wrap(i + 1))}>›</button>

            <div className="carousel-dots" role="tablist" aria-label="ギャラリーページ">
                {images.map((_, i) => (
                    <button
                        key={i}
                        role="tab"
                        aria-selected={i === idx}
                        aria-label={`${i + 1}枚目`}
                        className={`dot ${i === idx ? 'is-active' : ''}`}
                        onClick={() => setIdx(i)}
                    />
                ))}
            </div>
        </div>
    );
}
