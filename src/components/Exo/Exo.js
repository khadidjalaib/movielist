// import React, { Component } from "react";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default class Exo extends Component {
//   state = {
//     solde: 0,
//     montant: "",
//     virement: "",
//     telephone: "",
//   };
//   render() {
//     return (
//       <div>
//         <div>
//           <h1>Bienvenue dans l'espace service</h1>
//         </div>
//         <div>
//           <h2>Votre solde est:{this.state.solde}</h2>
//         </div>
//         <div>Nos services</div>
//         <div>
//           recharge votre compte
//           <input
//             value={this.state.montant}
//             placeholder="montant"
//             onChange={(e) => {
//               if (!Number.isNaN(parseFloat(e.target.value))) {
//                 this.setState({
//                   montant: parseFloat(e.target.value),
//                 });
//               }
//             }}
//           ></input>
//           <button
//             onClick={() => {
//               this.setState({
//                 solde: this.state.montant + this.state.solde,
//                 montant: "",
//               });
//             }}
//           >
//             recharger
//           </button>
//           virement
//           <input
//             value={this.state.virement}
//             placeholder="montant"
//             onChange={(e) => {
//               if (!Number.isNaN(parseFloat(e.target.value))) {
//                 this.setState({
//                   virement: parseFloat(e.target.value),
//                 });
//               }
//             }}
//           ></input>
//           <button
//             onClick={() => {
//               this.setState({
//                 solde: this.state.solde - this.state.virement,
//                 virement: "",
//               });
//               toast("virement effecuté");
//             }}
//           >
//             recharger
//           </button>
//           recharge téléphone
//           <input
//             value={this.state.telephone}
//             placeholder="montant"
//             onChange={(e) => {
//               if (!Number.isNaN(parseFloat(e.target.value))) {
//                 this.setState({
//                   telephone: parseFloat(e.target.value),
//                 });
//               }
//             }}
//           ></input>
//           <button
//             onClick={() => {
//               this.setState({
//                 solde: this.state.solde - this.state.telephone,
//                 telephone: "",
//               });
//               toast("virement effectué");
//             }}
//           >
//             recharger
//           </button>
//         </div>
//         <ToastContainer />
//       </div>
//     );
//   }
// }



//////////////////////////////////////////////////////////////Fonction/////////////////////////////////////////////////////////////////////////////
// import React from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useState } from "react";
// import "../../components/Exo/Exo.css";
// const Exo = () => {
//   const [solde, setSolde] = useState(0);
//   const [montant, setMontant] = useState("");
//   const [virement, setVirement] = useState("");
//   const [telephone, setTelephone] = useState("");

//   return (
//     <div>
//       <div>
//         <h1 className="bienvenue">Bienvenue dans l'espace service</h1>
//       </div>
//       <div>
//         <h2 className="solde">Votre solde est:{solde}</h2>
//       </div>
//       <div className="service">Nos services</div>
//       <div>
//         <div className="compte">
//           recharger votre compte
//           <input
//             value={montant}
//             placeholder="montant"
            // onChange={(e) => {
            //   if (!Number.isNaN(parseFloat(e.target.value))) {
            //     setMontant(e.target.value);
            //   }
            // }}
//           ></input>
        //   <button
        //     onClick={() => {
        //       setSolde(montant + solde);
        //       setMontant("");
        //     }}
        //   >
        //     recharger
        //   </button>
//         </div>
//         <div className="virement">
//           virement
//           <input
//             value={virement}
//             placeholder="montant"
//             onChange={(e) => {
//               if (!Number.isNaN(parseFloat(e.target.value))) {
//                 setVirement(e.target.value);
//               }
//             }}
//           ></input>
//           <button
//             onClick={() => {
//               setSolde(solde - virement);
//               setVirement("");

//               toast("virement effecuté");
//             }}
//           >
//             recharger
//           </button>
//         </div>
//         <div className="telephone">
//           recharge téléphone
//           <input
//             value={telephone}
//             placeholder="montant"
//             onChange={(e) => {
//               if (!Number.isNaN(parseFloat(e.target.value))) {
//                 setTelephone(e.target.value);
//               }
//             }}
//           ></input>
//           <button
//             onClick={() => {
//               setSolde(solde - telephone);
//               setTelephone("");

//               toast("virement effectué");
//             }}
//           >
//             recharger
//           </button>
//         </div>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default Exo;
