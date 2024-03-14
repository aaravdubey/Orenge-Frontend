import { useEffect } from "react";
import LocationCard from "./LocationCard";
import { useState } from "react";
import Christ from "../assets/christ.jpg";
import Jain from "../assets/jain.jpg";
import Bangalore from "../assets/bangalore.jpg";
import IIS from "../assets/iis.jpg";
import reva from "../assets/reva.jpg";
import pes from "../assets/pes.jpg";
import iimb from "../assets/iimb.jpg";
import national from "../assets/national.jpg";

export default function Modal({ setCampus, showModal, setShowModal }) {

  const [uni, setUni] = useState('');

  useEffect(() => {
    if (localStorage.getItem('campus') == undefined)
      setShowModal(true);
  }, [])

  useEffect(() => { 
    setUni('');
  }, [showModal])

  function onCampusSet(campus) {
    console.log(campus);
    setShowModal(false);
    setCampus(campus);
    localStorage.setItem('campus', campus);
  }

  return (
    <>
      {showModal ? (
        <>
          <div
            className="justify-center items-start mt-10 flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-5xl">
              {/*content*/}
              <div className="border-0 shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none rounded-2xl">


                {uni != '' ?
                  <>
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <h3 className="text-2xl font-semibold">
                        {uni} Campuses
                      </h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>

                    <div className="relative px-6 py-2 flex-auto">

                      <div className="grid grid-cols-6 md:grid-cols-6 gap-8 pt-3">
                        <button onClick={() => onCampusSet(uni + " " + ", Central Campus")} className="flex px-3 py-2 rounded-lg hover:bg-gray-100">
                          <LocationCard imgSrc={Christ} name="Central" />
                        </button>
                        <button onClick={() => onCampusSet(uni + " " + ", Bannerghatta Road Campus")} className="flex px-3 py-2 rounded-lg hover:bg-gray-100">
                          <LocationCard imgSrc={Christ} name="Bannerghatta Road" />
                        </button>
                        <button onClick={() => onCampusSet(uni + " " + ", Kengeri Campus")} className="flex px-3 py-2 rounded-lg hover:bg-gray-100">
                          <LocationCard imgSrc={Christ} name="Kengeri" />
                        </button>
                        <button onClick={() => onCampusSet(uni + " " + ", Yeshwanthpur Campus")} className="flex px-3 py-2 rounded-lg hover:bg-gray-100">
                          <LocationCard imgSrc={Christ} name="Yeshwanthpur" />
                        </button>
                        <button onClick={() => onCampusSet(uni + " " + ", Delhi NCR Campus")} className="flex px-3 py-2 rounded-lg hover:bg-gray-100">
                          <LocationCard imgSrc={Christ} name="Delhi NCR" />
                        </button>
                        <button onClick={() => onCampusSet(uni + " " + ", Pune Lavasa Campus")} className="flex px-3 py-2 rounded-lg hover:bg-gray-100">
                          <LocationCard imgSrc={Christ} name="Pune Lavasa" />
                        </button>
                      </div>
                    </div>
                  </> :

                  <>
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <h3 className="text-2xl font-semibold text-gray-900">
                        All Universities
                      </h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>

                    {/*body*/}
                    <div className="relative px-6 py-2 flex-auto">
                      <div className="flex items-start justify-items-center gap-4">
                        <button onClick={() => setUni('Christ University')} className="h-full px-3 py-2 rounded-lg hover:bg-gray-100">
                          <LocationCard imgSrc={Christ} name="Christ University" />
                        </button>
                        <button onClick={() => setUni('JAIN University')} className="h-full px-3 py-2 rounded-lg hover:bg-gray-100">
                          <LocationCard imgSrc={Jain} name="JAIN University" />
                        </button>
                        <button onClick={() => setUni('Bangalore University')} className="h-full px-3 py-2 rounded-lg hover:bg-gray-100">
                          <LocationCard imgSrc={Bangalore} name="Bangalore University" />
                        </button>
                        <button onClick={() => setUni('Indian Institiute Of Science')} className="h-full px-3 py-2 rounded-lg hover:bg-gray-100">
                          <LocationCard imgSrc={IIS} name="Indian Institiute Of Science" />
                        </button>
                        <button onClick={() => setUni('Reva University')} className="h-full px-3 py-2 rounded-lg hover:bg-gray-100">
                          <LocationCard imgSrc={reva} name="Reva University" />
                        </button>
                        <button onClick={() => setUni('PES University')} className="h-full px-3 py-2 rounded-lg hover:bg-gray-100">
                          <LocationCard imgSrc={pes} name="PES University" />
                        </button>
                        <button onClick={() => setUni('IIM Beng')} className="h-full px-3 py-2 rounded-lg hover:bg-gray-100">
                          <LocationCard imgSrc={iimb} name="IIM Beng" />
                        </button>
                        <button onClick={() => setUni('National Law School of India')} className="h-full px-3 py-2 rounded-lg hover:bg-gray-100">
                          <LocationCard imgSrc={national} name="National Law School of India" />
                        </button>
                      </div>
                    </div>
                  </>
                }

                {/*footer*/}
                {/* <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div> */}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null
      }
    </>
  );
}