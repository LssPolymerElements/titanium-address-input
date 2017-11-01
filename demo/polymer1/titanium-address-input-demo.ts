/// <reference path="bower_components/polymer-ts/polymer-ts.d.ts" />

@component('titanium-address-input-demo')
class TitaniumAddressInputDemo extends polymer.Base {
  attached() {
  }

  @listen('submitButton.tap')
  buttonTapped() {
    this.$.form.validate();
  }
}
TitaniumAddressInputDemo.register();