import { Sprite, Texture } from "pixi.js";
import { injectable } from "inversify";
import { TextureManager } from "../../TextureManager";
import { StageViewService } from "../../StageViewService";

@injectable()
export class BackgroundPreparer {
  private readonly background: Sprite;

  constructor(private textureManager: TextureManager, private theaterViewService: StageViewService) {
    this.background = new Sprite();
    this.background.anchor.set(0.5, 0.5);
  }

  getSprite() {
    return this.background;
  }

  prepare() {
    this.background.texture = this.textureManager.getTexture("BACKGROUND");
    // this.background.texture = Texture.WHITE;
    this.background.alpha = this.theaterViewService.getView().backgroundDim;
    return this.background;
  }
}
