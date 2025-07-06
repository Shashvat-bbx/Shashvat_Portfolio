// this is the name and photo component
import Image from "next/image";

export default function Name_and_Photo() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center lg:items-start lg:justify-start">
        <h1 className="text-5xl">
         <span className="font-bold">Shashvat</span> Singhal
        </h1>
        
        <p className="text-xl">CS undergraduate student at DTU</p>
      </div>


      <div className="flex flex-col-reverse gap-10 justify-center items-center py-6 lg:flex-row">
        <div className="flex flex-col gap-4 justify-center">
          <p>
          I’m a third-year Computer Engineering student at Delhi Technological University (DTU) with a strong interest in Machine Learning and Artificial Intelligence. Over the past few years, I’ve worked on various research projects and internships, exploring how AI can solve real-world problems. From developing models for online exam proctoring to working on predictive analytics, I enjoy tackling challenges that push me to learn and improve. Along the way, I’ve published research, participated in competitions, and collaborated with people who share the same curiosity for AI and technology.
          </p>
          <p>
          <br/>
          Outside of academics, I’ve been passionate about beatboxing for almost a decade now—it started as a fun hobby and turned into something I genuinely enjoy. I also love experimenting with different interests and picking up new skills whenever I get the chance. Whether it’s exploring AI, music, or something completely unrelated, I enjoy learning and trying new things. I believe in keeping a balance between work and fun, and I’m always excited about new opportunities that allow me to grow in different ways.
          </p>
        </div>
        <Image src="/profile_image.jpg" alt="Profile" width={300} height={500} className="rounded-lg flex-1 " />
      </div>
      
    </div>
  );
}
