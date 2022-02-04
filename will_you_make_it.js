const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    if (distanceToPump / (mpg * fuelLeft) <= 1) return true;
    else return false;
  };