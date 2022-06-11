import React from "react";

const Client = () => {
  return (
    <div>
      <h1 className="text-center text-5xl mt-10">Client Testimonials</h1>
      <div className="divider">
        <span className="text-2xl text-secondary">what client says</span>
      </div>
      <div className="my-20 grid lg:grid-cols-2 gap-10 mx-10 grid-cols-1">
        <div class="indicator my-10 w-full">
          <div class="indicator-item indicator-top lg:left-1 right-96">
            <div class="avatar">
              <div class="w-24 rounded-full ring ring-2 ring-neutral ring-opacity-60 ring-offset-base-300 ring-offset-2">
                <img src="https://toufiqhasankiron.me/images/testimonials/client1.jpg" />
              </div>
            </div>
          </div>
          <div class="card border-2 border-neutral border-opacity-60">
            <div class="card-body">
              <h2 class="card-title mt-6">Aiyana</h2>
              <p className="mb-2 text-sm">CEO / Web Design Company</p>
              <p>
                Walter displays exemplary professionalism and is able to take on
                challenges. He learns quickly and is an asset to any team.
              </p>
            </div>
          </div>
        </div>
        <div class="indicator my-10 w-full">
          <div class="indicator-item indicator-top lg:left-1 right-96">
            <div class="avatar">
              <div class="w-24 rounded-full ring ring-2 ring-neutral ring-opacity-60 ring-offset-base-300 ring-offset-2">
                <img src="https://toufiqhasankiron.me/images/testimonials/client2.jpg" />
              </div>
            </div>
          </div>
          <div class="card border-2 border-neutral border-opacity-60">
            <div class="card-body">
              <h2 class="card-title mt-6">Alexander</h2>
              <p className="mb-2 text-sm">CEO / Web Design Company</p>
              <p>
                Walter displays exemplary professionalism and is able to take on
                challenges. He learns quickly and is an asset to any team.
              </p>
            </div>
          </div>
        </div>
        <div class="indicator my-10 w-full">
          <div class="indicator-item indicator-top lg:left-1 right-96">
            <div class="avatar">
              <div class="w-24 rounded-full ring ring-2 ring-neutral ring-opacity-60 ring-offset-base-300 ring-offset-2">
                <img src="https://toufiqhasankiron.me/images/testimonials/client3.jpg" />
              </div>
            </div>
          </div>
          <div class="card border-2 border-neutral border-opacity-60">
            <div class="card-body">
              <h2 class="card-title mt-6">Ariya</h2>
              <p className="mb-2 text-sm">Web Developer</p>
              <p>
              Walter is a great co-worker and problem solver. He is quick to extend his helping hand and makes a good team player.
              </p>
            </div>
          </div>
        </div>
        <div class="indicator my-10 w-full">
          <div class="indicator-item indicator-top lg:left-1 right-96">
            <div class="avatar">
              <div class="w-24 rounded-full ring ring-2 ring-neutral ring-opacity-60 ring-offset-base-300 ring-offset-2">
                <img src="https://toufiqhasankiron.me/images/testimonials/client4.jpg" />
              </div>
            </div>
          </div>
          <div class="card border-2 border-neutral border-opacity-60">
            <div class="card-body">
              <h2 class="card-title mt-6">Braiden</h2>
              <p className="mb-2 text-sm">Web Designer</p>
              <p>
              Walter is a great co-worker and problem solver. He is quick to extend his helping hand and makes a good team player.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
