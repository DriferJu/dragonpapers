import "../../assets/variables.css";
import "./equipmentBloc.css";
import MoneySeg from "./MoneySeg/MoneySeg";
import Equipment from "../../assets/dnd_ico/treasure-chest.png";

function EquipmentBloc() {
  const purses = [
    { purseName: "PP", PurseValue: "0" },
    { purseName: "GP", PurseValue: "0" },
    { purseName: "EP", PurseValue: "0" },
    { purseName: "SP", PurseValue: "0" },
    { purseName: "CP", PurseValue: "0" },
  ];

  return (
    <section id="EQUIPMENT">
      <div id="equipment_ico_">
        <img id="equipment_ico" src={Equipment} alt="equipment icone" />
      </div>
      <div id="equipment_bloc">
        <p id="equipment_title">Equipment</p>
        <div id="stuff_area">
          <ul id="stuff_ul">
            <li className="stuff_item">stuff 1</li>
            <li className="stuff_item">stuff 2</li>
            <li className="stuff_item">stuff 3</li>
            <li className="stuff_item">stuff 4</li>
            <li className="stuff_item">stuff 5</li>
            <li className="stuff_item">stuff 6</li>
            <li className="stuff_item">stuff 7</li>
            <li className="stuff_item">stuff 8</li>
            <li className="stuff_item">stuff 9</li>
            <li className="stuff_item">stuff 9</li>
            <li className="stuff_item">stuff 10</li>
            <li className="stuff_item">stuff 11</li>
            <li className="stuff_item">stuff 12</li>
            <li className="stuff_item">stuff 13</li>
            <li className="stuff_item">stuff 14</li>
            <li className="stuff_item">stuff 15</li>
            <li className="stuff_item">stuff 16</li>
            <li className="stuff_item">stuff 17</li>
            <li className="stuff_item">stuff 18</li>
            <li className="stuff_item">stuff 19</li>
          </ul>
        </div>
        <div id="money_aera">
          {purses.map((purse) => (
            <MoneySeg
              key={purse.purseName}
              id={purse.purseName}
              name={purse.purseName}
            />
          ))}
          <div className="purse_exchange">
            <p id="exchange_rate_title">EXCHANGE</p>
            <div id="exchange_infos">
              <p className="exchange_info">1 PA = 10 PC</p>
              <p className="exchange_info">1 PE = 5 PA</p>
              <p className="exchange_info">1 PO = 2 PE</p>
              <p className="exchange_info">1 PP = 10 PO</p>
            </div>
          </div>
        </div>
      </div>
      <div id="money_aera_print">
        {purses.map((purse) => (
          <MoneySeg
            key={purse.purseName}
            id={purse.purseName}
            name={purse.purseName}
            value={purse.PurseValue}
          />
        ))}
      </div>
    </section>
  );
}

export default EquipmentBloc;
