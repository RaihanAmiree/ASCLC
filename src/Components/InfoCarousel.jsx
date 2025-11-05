import React from "react";
import Slider from "react-slick";
import InfoCards from "./InfoCards";
import Amiree from "../assets/Amiree.jpg";
import Auronno from "../assets/Auronno.jpg";
import Sabit from "../assets/Sabit.jpg";
import Anindya from "../assets/Anindya.jpg";
import Nashwan from "../assets/Nashwan.jpg";
import Ruwayd from "../assets/Ruwayd.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AutoPlay() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 7000,
    autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  // 👇 Array of InfoCard data
  const teamMembers = [
    {
      img: Amiree,
      name: "Raihan Amiree",
      rank: "Chief Advisor",
      grade: "IX EV-1",
      roll: "Roll : 01",
    },
    {
      img: Anindya,
      name: "Anindya Pramanik",
      rank: "Financial Secretary",
      grade: "IX EV-1",
      roll: "Roll : 02",
    },


    {
      img: Auronno,
      name: "Hasnain K Auronno",
      rank: "General Secretary",
      grade: "IX EV-1",
      roll: "Roll : 14",
    },
    {
      img: Sabit,
      name: "Sabit Showmik",
      rank: "Joint Secretary",
      grade: "IX EV-1",
      roll: "Roll : 06",
    },
    {
      img: Nashwan,
      name: "Hemadri Shekhar",
      rank: "Organizing secretary",
      grade: "IX EV-",
      roll: "Roll : 09",
    },
    {
      img: Ruwayd,
      name: "Wasifur Rahman",
      rank: "Administrative Secretary",
      grade: "IX EV-1",
      roll: "Roll : 07",
    },
  ];

  return (
    <div className="w-full px-4 sm:px-6 md:px-8 py-8">
      <div className="max-w-[1200px] mx-auto">
        <Slider {...settings}>
          {teamMembers.map((member, i) => (
            <div key={i} className="px-2">
              <InfoCards
                img={member.img}
                name={member.name}
                rank={member.rank}
                grade={member.grade}
                roll={member.roll}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default AutoPlay;
