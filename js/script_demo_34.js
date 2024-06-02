function showdemo(week) {
  const p = document.querySelector(".show-classdemo");
  console.log("p", p);
  switch (week) {
    case "w1":
      p.innerHTML = `<iframe src="./demo/w01_dom_34/" width="100%" height="100%" />`;
      break;
    case "w2":
      p.innerHTML = `<iframe src="./demo/w02_tictactoe_34/tictactoe_34.html" width="100%" height="100%" />`;
      break;
    case "w3-p1":
      p.innerHTML = `<iframe src="./demo/w03_basics_34/p1_34/p1_34.html" width="100%" height="100%" />`;
      break;
    case "w3-p2":
      p.innerHTML = `<iframe src="./demo/w03_basics_34/p2_34/p2_34.html" width="100%" height="100%" />`;
      break;
    case "w3-p3":
      p.innerHTML = `<iframe src="./demo/w03_basics_34/p3_34/p3_34.html" width="100%" height="100%" />`;
      break;
    case "w4-p4":
      p.innerHTML = `<iframe src="./demo/w04_basics_34/p4_counter_34/p4_34.html" width="100%" height="100%" />`;
      break;
    case "w4-p5":
      p.innerHTML = `<iframe src="./demo/w04_basics_34/p5_34/p5_34.html" width="100%" height="100%" />`;
      break;
    case "w4-p6":
      p.innerHTML = `<iframe src="./demo/w04_basics_34/p6_34/p6_34.html" width="100%" height="100%" />`;
      break;
    case "w5":
      p.innerHTML = `<iframe src="./demo/w05_menu_34/" width="100%" height="100%" />`;
      break;
    case "project":
      p.innerHTML = `<iframe src="./demo/w15_products_34/products_supa_34.html" width="100%" height="100%" />`;
      break;
  }
}
