/// <reference path="bower_components/polymer2-ts/polymer2-ts.ts" />
/// <reference path="bower_components/polymer2-ts/polymer.d.ts" />

@customElement('titanium-address-input-demo')
class TitaniumAddressInputDemo extends Polymer.Element {
  @property()
  roles: Array<string>;

  @property()
  role: string = 'View All Logs';

  @property()
  isDev: boolean;

  @listen('tap', 'addRoleButton')
  addRoleButtonTapped() {
    this.push('roles', this.role);
  }

  @listen('tap', 'clearRolesButton')
  clearRolesButtonTapped() {
    this.roles = [];
  }
}
