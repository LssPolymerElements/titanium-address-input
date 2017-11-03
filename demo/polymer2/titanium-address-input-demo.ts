/// <reference path="bower_components/polymer2-ts/polymer2-ts.ts" />
/// <reference path="bower_components/polymer2-ts/polymer.d.ts" />

@customElement('titanium-address-input-demo')
class TitaniumAddressInputDemo extends Polymer.Element {
  @listen('tap', 'submitButton')
  buttonTapped() {
    this.$.form.validate();
  }
}
