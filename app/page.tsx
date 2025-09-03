'use client';

import Link from "next/link";
import Image from "next/image";
import '@/styles/home.css';
import WorksSection from "@/components/worksSection";

export default function HomePage() {
  return (
    <main className="home">
      <section id="home" className="section hero">
        <h1 className="hero-title">emiko&apos;s Portfolio🫶🚀</h1>
        <p className="hero-lead">Webでつなぐ、楽しいものづくり。</p>
        <Link href='#works' className="cta-btn">
          SEE MY WORKS
        </Link>
      </section>

      <section id="about" className="section about">
        <div className="section-inner">
          <h2 className="section-title">About</h2>
          <p>
            emikoのポートフォリオサイトへようこそ！<br />
            私が学んできた技術や経験をまとめております。<br />
            Web制作、オリジナル漫画サイト、掲示板アプリなど、<br />
            趣味と実務の両面から「楽しく、心に届く」<br />
            ものづくりを目指しています。
          </p>
        </div>
      </section>

      <section id="works" className="section works">
        <div className="section-inner">
          <h2 className="section-title">Works</h2>
          <p>業務管理ツール・趣味の漫画サイト・掲示板など、さまざまな制作物をご紹介しています。</p>
          <WorksSection />
        </div>
      </section>

      <section id="profile" className="section profile">
        <div className="section-inner">
          <h2 className="section-title">Profile</h2>
          <div className="profile-grid">

            <div className="profile-text">
              <p>
                広島出身のWebクリエイターのemikoです。<br />
                いつかエンジニアとして働くことを目指して<br />
                日々学習と制作に励んでいます。<br />
                Next.jsやFirebaseを使ったWebアプリ制作や、<br />
                SNS発信などを行なっています。
              </p>
              <p>
                <br />
                「楽しい」「使いやすい」<br />
                そんな作品を作りたいという思いを胸に、<br />
                一つ一つ丁寧にものづくりをしています。
              </p>
            </div>

            <div className="profile-photo">
              <Image
                src="/images/emiko.jpg"
                alt="emikoのアイコン"
                width={250}
                height={250}
                className=""
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <div className="section-inner">
          <h2 className="section-title">Contact</h2>
          <p>お仕事のご相談やご質問など、お気軽にご連絡ください。</p>

          <form
            className="contact-form"
            action="https://formsubmit.co/emikohonda1103@gmail.com"
            method="POST"
          >
            <input type="hidden" name="_next" value="http://localhost:3000/contact/thanks" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="text" name="_honey" style={{ display: 'none' }} />

            <div className="form-group">
              <label htmlFor="name">お名前</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">メールアドレス</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">メッセージ</label>
              <textarea name="message" id="message" rows={5} required></textarea>
            </div>

            <button type="submit" className="submit-btn">送信する</button>
          </form>
        </div>
      </section>


    </main>
  )
}