var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//邮件窗口
var WndMail = (function (_super) {
    __extends(WndMail, _super);
    function WndMail() {
        return _super.call(this) || this;
    }
    WndMail.Inst = function () {
        if (this._wndMail == null)
            this._wndMail = new WndMail();
        return this._wndMail;
    };
    WndMail.prototype.onInit = function () {
        this.contentPane = fairygui.UIPackage.createObject("Menu", "WndMail").asCom;
        this.modal = true;
    };
    WndMail.prototype.EventBind = function () {
    };
    WndMail.prototype.OnShown = function () {
    };
    return WndMail;
}(WindowBase));
//# sourceMappingURL=WndMail.js.map