
/*
 * Floor class
 * A building Floor Plan. Holds a list of Layers.
 */

import Base from "./Base";
import Snap from "snapsvg";
import Layers from "./Layers";

export default class Floor extends Base {

  constructor(options){
    super(options);

    this.defaults(options, Floor.defaults);

    this.container = null;

    this.layers = new Layers();
    this.layers.on("add", layer => {
      layer.onAttach(this.container);
    });
  }

  onAttach(parent) {
    this.container = parent.group();
    this.container.addClass("floor");
  }

}

Floor.defaults = {
  name: "unnamed"
};
