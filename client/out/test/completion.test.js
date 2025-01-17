"use strict";
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
Object.defineProperty(exports, "__esModule", { value: true });
const vscode = require("vscode");
const assert = require("assert");
const helper_1 = require("./helper");
suite("Should do completion", () => {
    const docUri = (0, helper_1.getDocUri)("completion.qml");
    test("Completes with Rectangle component", async () => {
        await testCompletion(docUri, new vscode.Position(0, 0), {
            items: [
                { label: "Abstract3DSeries", kind: vscode.CompletionItemKind.Module },
                { label: "AbstractActionInput", kind: vscode.CompletionItemKind.Module },
                { label: "AbstractAnimation", kind: vscode.CompletionItemKind.Module },
                { label: "AbstractAxis", kind: vscode.CompletionItemKind.Module },
                { label: "AbstractAxis3D", kind: vscode.CompletionItemKind.Module },
                { label: "AbstractAxisInput", kind: vscode.CompletionItemKind.Module },
                { label: "AbstractBarSeries", kind: vscode.CompletionItemKind.Module },
                { label: "AbstractButton", kind: vscode.CompletionItemKind.Module },
                { label: "AbstractClipAnimator", kind: vscode.CompletionItemKind.Module },
                { label: "AbstractClipBlendNode", kind: vscode.CompletionItemKind.Module },
                { label: "AbstractDataProxy", kind: vscode.CompletionItemKind.Module },
                { label: "AbstractGraph3D", kind: vscode.CompletionItemKind.Module },
                { label: "AbstractInputHandler3D", kind: vscode.CompletionItemKind.Module },
                { label: "AbstractPhysicalDevice", kind: vscode.CompletionItemKind.Module },
                { label: "AbstractRayCaster", kind: vscode.CompletionItemKind.Module },
                { label: "AbstractSeries", kind: vscode.CompletionItemKind.Module },
                { label: "AbstractSkeleton", kind: vscode.CompletionItemKind.Module },
                { label: "AbstractTextureImage", kind: vscode.CompletionItemKind.Module },
                { label: "Accelerometer", kind: vscode.CompletionItemKind.Module },
                { label: "AccelerometerReading", kind: vscode.CompletionItemKind.Module },
                { label: "Accessible", kind: vscode.CompletionItemKind.Module },
                { label: "Action", kind: vscode.CompletionItemKind.Module },
                { label: "ActionGroup", kind: vscode.CompletionItemKind.Module },
                { label: "ActionInput", kind: vscode.CompletionItemKind.Module },
                { label: "AdditiveClipBlend", kind: vscode.CompletionItemKind.Module },
                { label: "Address", kind: vscode.CompletionItemKind.Module },
                { label: "Affector", kind: vscode.CompletionItemKind.Module },
                { label: "Age", kind: vscode.CompletionItemKind.Module },
                { label: "AlphaCoverage", kind: vscode.CompletionItemKind.Module },
                { label: "AlphaTest", kind: vscode.CompletionItemKind.Module },
                { label: "Altimeter", kind: vscode.CompletionItemKind.Module },
                { label: "AltimeterReading", kind: vscode.CompletionItemKind.Module },
                { label: "AmbientLightReading", kind: vscode.CompletionItemKind.Module },
                { label: "AmbientLightSensor", kind: vscode.CompletionItemKind.Module },
                { label: "AmbientTemperatureReading", kind: vscode.CompletionItemKind.Module },
                { label: "AmbientTemperatureSensor", kind: vscode.CompletionItemKind.Module },
                { label: "AnalogAxisInput", kind: vscode.CompletionItemKind.Module },
                { label: "AnchorAnimation", kind: vscode.CompletionItemKind.Module },
                { label: "AnchorChanges", kind: vscode.CompletionItemKind.Module },
                { label: "AngleDirection", kind: vscode.CompletionItemKind.Module },
                { label: "AnimatedImage", kind: vscode.CompletionItemKind.Module },
                { label: "AnimatedSprite", kind: vscode.CompletionItemKind.Module },
                { label: "Animation", kind: vscode.CompletionItemKind.Module },
                { label: "AnimationController", kind: vscode.CompletionItemKind.Module },
                { label: "AnimationGroup", kind: vscode.CompletionItemKind.Module },
                { label: "Animator", kind: vscode.CompletionItemKind.Module },
                { label: "ApplicationWindow", kind: vscode.CompletionItemKind.Module },
                { label: "ApplicationWindowStyle", kind: vscode.CompletionItemKind.Module },
                { label: "AreaSeries", kind: vscode.CompletionItemKind.Module },
                { label: "Armature", kind: vscode.CompletionItemKind.Module },
                { label: "AttenuationModelInverse", kind: vscode.CompletionItemKind.Module },
                { label: "AttenuationModelLinear", kind: vscode.CompletionItemKind.Module },
                { label: "Attractor", kind: vscode.CompletionItemKind.Module },
                { label: "Audio", kind: vscode.CompletionItemKind.Module },
                { label: "AudioCategory", kind: vscode.CompletionItemKind.Module },
                { label: "AudioEngine", kind: vscode.CompletionItemKind.Module },
                { label: "AudioListener", kind: vscode.CompletionItemKind.Module },
                { label: "AudioSample", kind: vscode.CompletionItemKind.Module },
                { label: "AuthenticationDialogRequest", kind: vscode.CompletionItemKind.Module },
                { label: "Axis", kind: vscode.CompletionItemKind.Module },
                { label: "AxisAccumulator", kind: vscode.CompletionItemKind.Module },
                { label: "AxisSetting", kind: vscode.CompletionItemKind.Module },
                { label: "BackspaceKey", kind: vscode.CompletionItemKind.Module },
                { label: "Bar3DSeries", kind: vscode.CompletionItemKind.Module },
                { label: "BarCategoryAxis", kind: vscode.CompletionItemKind.Module },
                { label: "BarDataProxy", kind: vscode.CompletionItemKind.Module },
                { label: "Bars3D", kind: vscode.CompletionItemKind.Module },
                { label: "BarSeries", kind: vscode.CompletionItemKind.Module },
                { label: "BarSet", kind: vscode.CompletionItemKind.Module },
                { label: "BaseKey", kind: vscode.CompletionItemKind.Module },
                { label: "Behavior", kind: vscode.CompletionItemKind.Module },
                { label: "Binding", kind: vscode.CompletionItemKind.Module },
                { label: "Blend", kind: vscode.CompletionItemKind.Module },
                { label: "BlendedClipAnimator", kind: vscode.CompletionItemKind.Module },
                { label: "BlendEquation", kind: vscode.CompletionItemKind.Module },
                { label: "BlendEquationArguments", kind: vscode.CompletionItemKind.Module },
                { label: "BlitFramebuffer", kind: vscode.CompletionItemKind.Module },
                { label: "BluetoothDiscoveryModel", kind: vscode.CompletionItemKind.Module },
                { label: "BluetoothService", kind: vscode.CompletionItemKind.Module },
                { label: "BluetoothSocket", kind: vscode.CompletionItemKind.Module },
                { label: "BorderImage", kind: vscode.CompletionItemKind.Module },
                { label: "BorderImageMesh", kind: vscode.CompletionItemKind.Module },
                { label: "BoxPlotSeries", kind: vscode.CompletionItemKind.Module },
                { label: "BoxSet", kind: vscode.CompletionItemKind.Module },
                { label: "BrightnessContrast", kind: vscode.CompletionItemKind.Module },
                { label: "Buffer", kind: vscode.CompletionItemKind.Module },
                { label: "BusyIndicator", kind: vscode.CompletionItemKind.Module },
                { label: "BusyIndicatorStyle", kind: vscode.CompletionItemKind.Module },
                { label: "Button", kind: vscode.CompletionItemKind.Module },
                { label: "ButtonAxisInput", kind: vscode.CompletionItemKind.Module },
                { label: "ButtonGroup", kind: vscode.CompletionItemKind.Module },
                { label: "ButtonStyle", kind: vscode.CompletionItemKind.Module },
                { label: "Calendar", kind: vscode.CompletionItemKind.Module },
                { label: "CalendarStyle", kind: vscode.CompletionItemKind.Module },
                { label: "Camera", kind: vscode.CompletionItemKind.Module },
                { label: "Camera3D", kind: vscode.CompletionItemKind.Module },
                { label: "CameraCapabilities", kind: vscode.CompletionItemKind.Module },
                { label: "CameraCapture", kind: vscode.CompletionItemKind.Module },
                { label: "CameraExposure", kind: vscode.CompletionItemKind.Module },
                { label: "CameraFlash", kind: vscode.CompletionItemKind.Module },
                { label: "CameraFocus", kind: vscode.CompletionItemKind.Module },
                { label: "CameraImageProcessing", kind: vscode.CompletionItemKind.Module },
                { label: "CameraLens", kind: vscode.CompletionItemKind.Module },
                { label: "Canvas", kind: vscode.CompletionItemKind.Module },
                { label: "CheckBox", kind: vscode.CompletionItemKind.Module },
                { label: "Column", kind: vscode.CompletionItemKind.Module },
                { label: "ColumnLayout", kind: vscode.CompletionItemKind.Module },
                { label: "ComboBox", kind: vscode.CompletionItemKind.Module },
                { label: "Control", kind: vscode.CompletionItemKind.Module },
                { label: "Default", kind: vscode.CompletionItemKind.Module },
                { label: "DropArea", kind: vscode.CompletionItemKind.Module },
                { label: "Flickable", kind: vscode.CompletionItemKind.Module },
                { label: "Flipable", kind: vscode.CompletionItemKind.Module },
                { label: "Flow", kind: vscode.CompletionItemKind.Module },
                { label: "FocusScope", kind: vscode.CompletionItemKind.Module },
                { label: "Grid", kind: vscode.CompletionItemKind.Module },
                { label: "GridLayout", kind: vscode.CompletionItemKind.Module },
                { label: "Image", kind: vscode.CompletionItemKind.Module },
                { label: "Item", kind: vscode.CompletionItemKind.Module },
                { label: "Loader", kind: vscode.CompletionItemKind.Module },
                { label: "Menu", kind: vscode.CompletionItemKind.Module },
                { label: "MouseArea", kind: vscode.CompletionItemKind.Module },
                { label: "MultiPointTouchArea", kind: vscode.CompletionItemKind.Module },
                { label: "Page", kind: vscode.CompletionItemKind.Module },
                { label: "Pane", kind: vscode.CompletionItemKind.Module },
                { label: "ParticlePainter", kind: vscode.CompletionItemKind.Module },
                { label: "PathView", kind: vscode.CompletionItemKind.Module },
                { label: "PinchArea", kind: vscode.CompletionItemKind.Module },
                { label: "Popup", kind: vscode.CompletionItemKind.Module },
                { label: "QtObject", kind: vscode.CompletionItemKind.Module },
                { label: "Rectangle", kind: vscode.CompletionItemKind.Module },
                { label: "Repeater", kind: vscode.CompletionItemKind.Module },
                { label: "Row", kind: vscode.CompletionItemKind.Module },
                { label: "RowLayout", kind: vscode.CompletionItemKind.Module },
                { label: "ScrollView", kind: vscode.CompletionItemKind.Module },
                { label: "ShaderEffect", kind: vscode.CompletionItemKind.Module },
                { label: "ShaderEffectSource", kind: vscode.CompletionItemKind.Module },
                { label: "Shape", kind: vscode.CompletionItemKind.Module },
                { label: "SpriteSequence", kind: vscode.CompletionItemKind.Module },
                { label: "StackLayout", kind: vscode.CompletionItemKind.Module },
                { label: "StackView", kind: vscode.CompletionItemKind.Module },
                { label: "Text", kind: vscode.CompletionItemKind.Module },
                { label: "TextEdit", kind: vscode.CompletionItemKind.Module },
                { label: "TextInput", kind: vscode.CompletionItemKind.Module },
                { label: "ToolTip", kind: vscode.CompletionItemKind.Module },
                { label: "Window", kind: vscode.CompletionItemKind.Module },
            ],
        });
    });
});
async function testCompletion(docUri, position, expectedCompletionList) {
    await (0, helper_1.activate)(docUri);
    // Executing the command `vscode.executeCompletionItemProvider` to simulate triggering completion
    const actualCompletionList = (await vscode.commands.executeCommand("vscode.executeCompletionItemProvider", docUri, position));
    actualCompletionList.items = actualCompletionList.items.filter(item => item.kind !== vscode.CompletionItemKind.Snippet);
    assert.ok(actualCompletionList.items.length >= 1);
    expectedCompletionList.items
        .filter(item => item.kind !== vscode.CompletionItemKind.Snippet)
        .forEach((expectedItem, i) => {
        const actualItem = actualCompletionList.items[i];
        assert.equal(actualItem.label, expectedItem.label);
        assert.equal(actualItem.kind, expectedItem.kind);
    });
}
//# sourceMappingURL=completion.test.js.map