import "../assets/coffeerain.gif";
import "../assets/draftpink.gif";
import "../assets/droidcrime.gif";
import "../assets/exodus.gif";
import "../assets/familydinner.gif";
import "../assets/flower_shop.gif";
import "../assets/future.gif";
import "../assets/girlinrain.gif";
import "../assets/highfloor.gif";
import "../assets/highlands.gif";
import "../assets/highsoceity.gif";
import "../assets/lowlands.gif";
import "../assets/lullaby.gif";
import "../assets/midnight_melancholy.gif";
import "../assets/nighttrain.gif";
import "../assets/player2.gif";
import "../assets/sideshop.gif";
import "../assets/skate.gif";
import "../assets/sushi.gif";
import "../assets/cacao_and_coffee_shop.gif";

import files from "./script-data";

export default files.map((file_name) => require(`../assets/${file_name}`));