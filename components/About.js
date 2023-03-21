import React from "react";
import Image from "next/image";

function About() {
  const contributorList = [
    {
      name: 'Tanya Rajhans',
      image: 'https://media-exp1.licdn.com/dms/image/C4D03AQF9tYgKzbkzqQ/profile-displayphoto-shrink_400_400/0/1630318627699?e=1639008000&v=beta&t=3IdniZEK-Fgh96Vff79SHcFp1uvk6kRaH3EVrFb2X0g',
      altText: "Tanya's photo",
      role: 'Competitive Programmer',
      batch: 'NITA ECE-23',
    },
    {
      name: 'Atithi Kumar Singh',
      image: 'https://media-exp1.licdn.com/dms/image/C4E03AQGyjlKPAJlcxQ/profile-displayphoto-shrink_400_400/0/1628573551678?e=1639008000&v=beta&t=LrujJa0fXbccrpguAV8yOAc-l_umKOR7Rq-7I5HPyYo',
      altText: "Atithi's photo",
      role: 'Competitive Programmer',
      batch: 'NITA ECE-24',
    }
  ]
  const contributors = contributorList.map((item, i) => {
    return (
      <div className="w-full bg-white rounded-lg flex flex-col justify-center items-center" key={ i }>
        <div className="mb-8">
          <Image
            src={ item.image }
            width={100}
            height={100}
            className="object-center object-cover rounded-full h-36 w-36"
            alt={ item.altText }
          />
        </div>
        <div className="text-center">
          <p className="sm:text-xl text-gray-700 font-bold mb-2">
            { item.name }
          </p>
          <p className="text-sm text-gray-500">
            <span className="mb-1.5 sm:mb-0 block sm:inline">{ item.role }</span>
            <span className="hidden sm:inline">{ ' ' }|{ ' ' }</span>
            <span className="block sm:inline">{ item.batch }</span>
          </p>
        </div>
      </div>
    )
  })
  return (
    <div>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        href="https://unpkg.com/tailwindcss@2.2.4/dist/tailwind.min.css"
        rel="stylesheet"
      />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4">
        <h1 className="py-12 font-bold text-3xl text-center md:text-4xl lg:text-5xl font-heading text-indigo-900">
          Check our contributors
        </h1>
        <div className="grid grid-cols-2 gap-4 sm:gap-8">
          { contributors }
        </div>
      </section>
    </div>
  );

}

export default About;
