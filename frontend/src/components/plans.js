import React from "react";
import benifit1 from "../images/benifit1.webp";
import benifit2 from "../images/benifit2.webp";
import benifit3 from "../images/benifit3.webp";
import benifit4 from "../images/benifit4.webp";
import benifit5 from "../images/benifit5.webp";
import benifit6 from "../images/benifit6.webp";
import { useData } from './Datacontext';

const Plans = () => {
  const {addToCart} = useData();

  return (
    <>
      <div className="planbannerdiv">
        <h1 className="text-center text-white pt-5">
          Choose the Care Your Parents Deserve
        </h1>
        <h5 className="text-center text-white">
          We have all their needs covered.
        </h5>
        <div className="d-flex justify-content-evenly m-5 plansmaindiv">
          <div id="engback" className="card p-2">
            <div className="card-body">
              <h2 className="card-title">Engage Plan</h2>
              <p>Perfect for elders who's looking for community support</p>
              <h1>
                &#8377;399 <span className="fs-6">per month</span>
              </h1>
              <ul className="list-unstyled lh-lg mt-4">
                <li>
                  <i class="bi bi-chevron-double-right"></i> MohTv Access
                </li>
              </ul>
            </div>
            <div className="card-footer text-center border-0">
              <button id="engbtn" className="ps-4 pe-4 pt-2 pb-2 rounded-pill"
              onClick={() => addToCart({ planName: 'Engage Plan', amount: 399})}
              >
                Add to cart
              </button>
            </div>
          </div>
          <div id="empback" className="card p-2">
            <div className="card-body">
              <h2 className="card-title">Empower Plan</h2>
              <p>
                Designed for elders who need assistance with chronic pain
                management & social support
              </p>
              <h1>
                &#8377;2,999 <span className="fs-6">per month</span>
              </h1>
              <ul className="list-unstyled lh-lg mt-4">
                <li>
                  <i class="bi bi-chevron-double-right"></i> MohTv Access
                </li>
                <li>
                  <i class="bi bi-chevron-double-right"></i> Assistance From
                  Emoha Daughter
                </li>
                <li>
                  <i class="bi bi-chevron-double-right"></i> 24/7 Emergency
                  Support
                </li>
                <li>
                  <i class="bi bi-chevron-double-right"></i> +8 Additional Care
                  Services
                </li>
              </ul>
            </div>
            <div className="card-footer text-center border-0">
              <button id="empbtn" className="ps-4 pe-4 pt-2 pb-2 rounded-pill"
               onClick={() => addToCart({ planName: 'Empower Plan', amount: 2999,month:'per month' })}
              >
                Add to cart
              </button>
            </div>
          </div>
          <div id="enhback" className="card p-2">
            <div className="card-body">
              <h2 className="card-title">Enhance Plan</h2>
              <p>
                Tailered for seniors with acute health conditions and in need
                for constant medical monitoring
              </p>
              <h1>
                &#8377;4,999 <span className="fs-6">per month</span>
              </h1>
              <ul className="list-unstyled lh-lg mt-4">
                <li>
                  <i class="bi bi-chevron-double-right"></i> MohTv Access
                </li>
                <li>
                  <i class="bi bi-chevron-double-right"></i> Assistance From
                  Emoha Daughter
                </li>
                <li>
                  <i class="bi bi-chevron-double-right"></i> 24/7 Emergency
                  Support
                </li>
                <li>
                  <i class="bi bi-chevron-double-right"></i> Unlimited Doctor
                  Teleconsultation
                </li>
                <li>
                  <i class="bi bi-chevron-double-right"></i> +11 Additional Care
                  Services
                </li>
              </ul>
            </div>
            <div className="card-footer text-center border-0">
              <button id="enhbtn" className="ps-4 pe-4 pt-2 pb-2 rounded-pill"
                            onClick={() => addToCart({ planName: 'Enhance Plan', amount: 4999,month:'per month'})}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
    </div>

    <div className="benifitsmaindiv">
          <h2 className="ms-5 ps-5">Empower Benifits</h2>
          <div className="d-flex flex-wrap justify-content-center benifitsdiv">
            <div id="" className="card m-3">
              <div className="card-body">
                <img src={benifit1} alt="benefit1" className="benifitimgs" />
                <h5 className="mt-3 mb-4">Emergency Support</h5>
                <p>
                  Get 24*7 emergency support with ambulance coordination and
                  on-call doctor assistance.
                </p>
              </div>
            </div>
            <div id="" className="card m-3">
              <div className="card-body">
                <img src={benifit2} alt="benefit2" className="benifitimgs" />
                <h5 className="mt-3 mb-4">Emoha Companion</h5>
                <p>
                  Our Emoha Companion visits once-a-month to check vitals,
                  update medical records & more.
                </p>
              </div>
            </div>
            <div id="" className="card m-3">
              <div className="card-body">
                <img src={benifit3} alt="benefit3" className="benifitimgs" />
                <h5 className="mt-3 mb-4">Doctor's Appointment</h5>
                <p>
                  Get doctor's appointment arranged for a home visit or a
                  tele-consultation.
                </p>
              </div>
            </div>
            <div id="" className="card m-3">
              <div className="card-body">
                <img src={benifit4} alt="benefit4" className="benifitimgs" />
                <h5 className="mt-3 mb-4">Care Calls by Emoha Daughter</h5>
                <p>
                  Get regular care calls from your Emoha Daughter to check on
                  your health and well-being.
                </p>
              </div>
            </div>
            <div id="" className="card m-3">
              <div className="card-body">
                <img src={benifit5} alt="benefit5" className="benifitimgs" />
                <h5 className="mt-3 mb-4">Ambulance Expense</h5>
                <p>
                  Get all ambulance expenses within the city limit covered by
                  Emoha twice a year.
                </p>
              </div>
            </div>
            <div id="" className="card m-3">
              <div className="card-body">
                <img src={benifit6} alt="benefit6" className="benifitimgs" />
                <h5 className="mt-3 mb-4">Virtual Community</h5>
                <p>
                  Access our interactive community with MOH TV shows, Online
                  Clubs, Offline Events & more.
                </p>
              </div>
            </div>
          </div>
</div>
    </>
  );
};

export default Plans;
