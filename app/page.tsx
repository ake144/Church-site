

import PrayerRequest from "@/components/prayer";
import ServiceTime from "@/components/service";
import Image from "next/image";

export default function Home() {
  const imageUrl = "https://images.unsplash.com/photo-1507692049790-de58290a4334";

  return (
    <div className="relative h-full w-full bg-gray-100">
      {/* Background Image */}
      <div className="relative h-screen w-full">
        <Image
          src={imageUrl}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        />

        {/* Overlay Content */}
        <div className="relative z-10 w-full h-full flex flex-col justify-center items-center bg-black/50">
          <h1 className="text-5xl md:text-7xl font-bold text-white text-center">
            Come Seek God Together at Apostolic Church
          </h1>
        </div>
      </div>

      {/* Service Time Section */}
      <div className="relative py-20 bg-white">
        <ServiceTime />
      </div>

      {/* Mission and Connection Section */}
      <div className="relative py-20 bg-gray-800 text-white">
        <div className="text-center">
          <p className="font-bold text-lg">OUR MISSION</p>
          <h2 className="text-3xl my-6">Pursue And Equip Families To Passionately Follow Christ.</h2>
          <p className="text-5xl my-12">Get Connected!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mx-6 md:mx-20">
          {/* Article Components */}
          {[...Array(3)].map((_, i) => (
            <article
              key={i}
              className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                alt=""
                src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&auto=format&fit=crop&w=764&q=80"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="relative bg-gradient-to-t from-gray-900/70 to-gray-900/30 text-white p-6">
                <h3 className="text-lg font-bold mb-2">
                  {i === 0
                    ? "Ready for Baptism?"
                    : i === 1
                    ? "Come and Serve with Us!"
                    : "Ready to Explore the Doctrine?"}
                </h3>
                <p className="text-sm line-clamp-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
                  pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                  quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius
                  atque dignissimos. Molestias explicabo corporis voluptatem?
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Prayer Request Section */}
      <div className="relative py-20 bg-gray-800">
        <PrayerRequest />
      </div>
    </div>
  );
}
