const colorTheme = (type) => {
  let color = "";

  if (type === "Veg Store") {
    color = "#68A25E";
  } else if (type === "Health Store") {
    color = "#DCC249";
  } else if (type === "Ice Cream") {
    color = "#F16193";
  } else if (type === "Juice Bar") {
    color = "#FCBC5D";
  } else if (type === "Food Truck") {
    color = "#F3724B";
  } else if (type === "Market Vendor") {
    color = "#4D57A7";
  } else if (type === "B&B") {
    color = "#4498B0";
  } else if (type === "Bakery") {
    color = "#AB884B";
  } else if (type === "Catering") {
    color = "#42BAAE";
  } else if (type === "Delivery") {
    color = "#8CB85E";
  } else if (type === "Organization") {
    color = "#A1539B";
  } else if (type === "Other") {
    color = "#5C89C5";
  } else if (type === "Professional") {
    color = "#277E57";
  } else if (type === "veg-options") {
    color = "#E17675";
  } else if (type === "vegan") {
    color = "#479C5E";
  } else if (type === "vegetarian") {
    color = "#9B49A0";
  } else {
    color = "#F16193";
  }

  return color;
};

export default colorTheme;
