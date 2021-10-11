import React from "react";
import Image from "next/image";
import Link from "next/link";
import Gist from "react-gist";

function Tryy() {
  return (
    <div className="container home flex justify-center">
      <div className="flex justify-around flex-col items-center m-40  mt-14 rounded-xl bg-gray-200 shadow-xl ">
        <h1 className="text-3xl font-bold">B. ALPHA BETA GAMMA</h1>
        <p className="m-12">
          Lorem ipsuffm odor amet, consectetuer adipiscing elit. Suspendisse
          feugiat lacinia, mi amet nam aliquam elementum non pellentesque.
          Nostra placerat sagittis viverra sed fringilla senectus orci dis. Mus
          volutpat maximus justo luctus hendrerit. Iaculis inceptos rutrum
          habitant lacus blandit. Curae proin fringilla augue metus rhoncus
          fringilla platea. Iaculis lobortis at risus egestas aptent luctus eget
          litora. Fermentum consectetur lacus risus, fringilla eleifend placerat
          fames elementum. Mollis dolor primis ipsum, convallis condimentum
          vitae nisl. Torquent diam pulvinar facilisi at efficitur ac mus
          conubia.
        </p>

        <Image
            src="https://raw.githubusercontent.com/SinghAtithi/NITA-CP-Website/main/public/HeroPic.jpg"
            alt="Picture of the author"
            width={800}
            height={450}
            className="rounded-xl "
          />
        
        <p className="m-12">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Suspendisse
          feugiat lacinia, mi amet nam aliquam elementum non pellentesque.
          Nostra placerat sagittis viverra sed fringilla senectus orci dis. Mus
          volutpat maximus justo luctus hendrerit. Iaculis inceptos rutrum
          habitant lacus blandit. Curae proin fringilla augue metus rhoncus
          fringilla platea. Iaculis lobortis at risus egestas aptent luctus eget
          litora. Fermentum consectetur lacus risus, fringilla eleifend placerat
          fames elementum. Mollis dolor primis ipsum, convallis condimentum
          vitae nisl. Torquent diam pulvinar facilisi at efficitur ac mus
          conubia.
        </p>

        <div className="w-4/5">
          <Gist className="w-max" id="d3ef65356936d4687bd9b13193e46afc" />
        </div>

        <p className="m-12">
          Lorem ipsum odor amet, consectetuer adipiscing elit. Suspendisse
          feugiat lacinia, mi amet nam aliquam elementum non pellentesque.
          Nostra placerat sagittis viverra sed fringilla senectus orci dis. Mus
          volutpat maximus justo luctus hendrerit. Iaculis inceptos rutrum
          habitant lacus blandit. Curae proin fringilla augue metus rhoncus
          fringilla platea. Iaculis lobortis at risus egestas aptent luctus eget
          litora. Fermentum consectetur lacus risus, fringilla eleifend placerat
          fames elementum. Mollis dolor primis ipsum, convallis condimentum
          vitae nisl. Torquent diam pulvinar facilisi at efficitur ac mus
          conubia.
        </p>
      </div>
    </div>
  );
}

export default Tryy;
