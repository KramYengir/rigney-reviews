import BackButton from "@/app/components/BackButton";
import Image from "next/image";
import React from "react";
import lightLogo from "/public/lightLogo.png";
import darkLogo from "/public/darkLogo.png";

const AboutPage = () => {
  return (
    <section className="py-8 text-center sm:text-left">
      <div className="block dark:hidden">
        <Image src={lightLogo} alt="next logo" />
      </div>
      <div className="hidden dark:block">
        <Image src={darkLogo} alt="next logo" />
      </div>
      <h1 className="mt-10  text-2xl tracking-wider font-medium text-scooter-950 dark:text-scooter-100">
        About <span className="text-scooter-600 font-bold">Rigney</span>
        Reviews...
      </h1>
      <p className="my-4 max-w-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A illo
        voluptatum blanditiis quis est impedit ratione, laboriosam asperiores
        tempore provident voluptatibus architecto? Sunt distinctio debitis
        architecto necessitatibus cupiditate, ex illum. Quae laborum
        consequuntur sequi tempora suscipit necessitatibus similique expedita
        accusamus doloribus accusantium? Aperiam error blanditiis eius pariatur
        molestiae tenetur ipsam recusandae dignissimos temporibus, praesentium,
        eaque officia architecto saepe qui ullam.
      </p>
      <p className="my-4 max-w-2xl">
        Obcaecati aperiam deserunt explicabo beatae aliquam minus consectetur
        officiis nihil odio excepturi eius dolorem nulla ut, facere possimus
        nostrum voluptas praesentium, iste vitae soluta cupiditate quisquam? Ad
        ab illo ipsam. Possimus in accusamus, quisquam, blanditiis inventore
        nesciunt ea incidunt dignissimos quia quibusdam id repellat. Doloribus
        nihil earum laudantium vitae sunt voluptas amet fugit alias officiis
        rem, nesciunt, error consequatur. Deserunt? Soluta laboriosam sapiente
        autem nam hic, voluptates repellat molestiae quisquam corrupti
        voluptatibus ea, provident amet animi. Voluptate velit voluptatum
        adipisci fugiat eligendi voluptas? Odit placeat vero voluptates deleniti
        sed repellendus!
      </p>
    </section>
  );
};

export default AboutPage;
