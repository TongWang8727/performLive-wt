import { useState } from "react";
import NavigationButton from "../../Button/NavigationButton";
import "./style.css";

export default function MainNavigation() {
  const [allCategories, setAllCategories] = useState(true);
  const [lifeCoachers, setLifeCoachers] = useState(false);
  const [boutiqueStores, setBoutiqueStores] = useState(false);
  const [localCelebrity, setLocalCelebrity] = useState(false);
  const [cookingBaking, setCookingBaking] = useState(false);
  const [artists, setArtists] = useState(false);
  const [parenting, setParenting] = useState(false);

  const handleAllCategories = () => {
    setAllCategories(true);
    setLifeCoachers(false);
    setBoutiqueStores(false);
    setLocalCelebrity(false);
    setCookingBaking(false);
    setArtists(false);
    setParenting(false);
  };
  const handleLifeCoachers = () => {
    setAllCategories(false);
    setLifeCoachers(true);
    setBoutiqueStores(false);
    setLocalCelebrity(false);
    setCookingBaking(false);
    setArtists(false);
    setParenting(false);
  };
  const handleBoutiqueStores = () => {
    setAllCategories(false);
    setLifeCoachers(false);
    setBoutiqueStores(true);
    setLocalCelebrity(false);
    setCookingBaking(false);
    setArtists(false);
    setParenting(false);
  };
  const handleLocalCelebrity = () => {
    setAllCategories(false);
    setLifeCoachers(false);
    setBoutiqueStores(false);
    setLocalCelebrity(true);
    setCookingBaking(false);
    setArtists(false);
    setParenting(false);
  };
  const handleCookingBaking = () => {
    setAllCategories(false);
    setLifeCoachers(false);
    setBoutiqueStores(false);
    setLocalCelebrity(false);
    setCookingBaking(true);
    setArtists(false);
    setParenting(false);
  };
  const handleArtists = () => {
    setAllCategories(false);
    setLifeCoachers(false);
    setBoutiqueStores(false);
    setLocalCelebrity(false);
    setCookingBaking(false);
    setArtists(true);
    setParenting(false);
  };
  const handleParenting = () => {
    setAllCategories(false);
    setLifeCoachers(false);
    setBoutiqueStores(false);
    setLocalCelebrity(false);
    setCookingBaking(false);
    setArtists(false);
    setParenting(true);
  };

  return (
    <>
      <div className="main-navigation-frame">
        <NavigationButton
          value="All Categories"
          isClick={allCategories}
          onClick={handleAllCategories}
        />
        <NavigationButton
          value="Life Coachers"
          isClick={lifeCoachers}
          onClick={handleLifeCoachers}
        />
        <NavigationButton
          value="Boutique Stores"
          isClick={boutiqueStores}
          onClick={handleBoutiqueStores}
        />
        <NavigationButton
          value="Local Celebrity"
          isClick={localCelebrity}
          onClick={handleLocalCelebrity}
        />
        <NavigationButton
          value="Cooking / Baking"
          isClick={cookingBaking}
          onClick={handleCookingBaking}
        />
        <NavigationButton
          value="Artists"
          isClick={artists}
          onClick={handleArtists}
        />
        <NavigationButton
          value="Parenting"
          isClick={parenting}
          onClick={handleParenting}
        />
      </div>
    </>
  );
}
