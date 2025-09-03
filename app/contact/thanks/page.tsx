import '@/styles/home.css';
import Link from 'next/link';


export default function ThanksPage() {
    return (
        <main className="section thanks">
            <div className="section-inner">
                <h2 className="section-title">送信しました！</h2>
                <p>お問合せ内容を確認し、後日ご連絡させて頂きます。</p>
                <p>
                    <Link href="/" className="cta-btn" style={{ marginTop: '40px', display: 'inline-block' }}>
                        トップページに戻る
                    </Link>
                </p>
            </div>
        </main>
    );
}