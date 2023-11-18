const intToRoman = (value) => {
  const map_tho = ["", "M","MM","MMM"];
  const map_hun = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
  const map_ten = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
  const map_uni = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  let remaining = value;

  //ex: 2349

  // 1000
  const thousands = Math.floor(remaining / 1000); // 2
  remaining = remaining%1000; // 349

  // 100
  const hundreds = Math.floor(remaining / 100); // 3
  remaining = remaining%100; // 49

  // 10
  const tens = Math.floor(remaining / 10); // 4
  remaining = remaining%10; // 9

  // MM + CCC + XL + IX
  return map_tho[thousands] + map_hun[hundreds] + map_ten[tens] + map_uni[remaining];
}