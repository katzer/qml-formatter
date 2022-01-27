interface IReferences {
  [key: string]: any;
}
const References: IReferences = {
  Rectangle: {
    properties: {
      antialiasing: "bool",
      gradient: "any",
      color: "color",
      radius: "real",
      border: {
        color: "color",
        width: "int",
      },
    },
    inherit: "Item",
  },
  Button: {
    properties: {
      flat: "bool",
      highlighted: "bool",
    },
    inherit: "AbstractButton",
  },
  AbstractButton: {
    properties: {
      action: "Action",
      autoExclusive: "bool",
      autoRepeat: "bool",
      autoRepeatDelay: "int",
      autoRepeatInterval: "int",
      checkable: "bool",
      checked: "bool",
      display: "enumeration",
      down: "bool",
      icon: {
        cache: "bool",
        color: "color",
        height: "int",
        name: "string",
        source: "url",
        width: "int",
      },
      implicitIndicatorHeight: "real",
      implicitIndicatorWidth: "real",
      indicator: "Item",
      pressX: "real",
      pressY: "real",
      pressed: "bool",
      text: "string",
    },
    signals: {
      canceled: "voide-()",
      clicked: "voide-()",
      doubleClicked: "voide-()",
      pressAndHold: "voide-()",
      pressed: "voide-()",
      released: "voide-()",
      toggled: "voide-()",
    },
    methods: {
      toggle: "void-()",
    },
    inherit: "Control",
  },
  Control: {
    properties: {
      availableHeight: "real",
      availableWidth: "real",
      background: "Item",
      bottomInset: "real",
      bottomPadding: "real",
      contentItem: "Item",
      focusPolicy: "enumeration",
      focusReason: "enumeration",
      font: "font",
      horizontalPadding: "real",
      hoverEnabled: "bool",
      hovered: "bool",
      implicitBackgroundHeight: "real",
      implicitBackgroundWidth: "real",
      implicitContentHeight: "real",
      implicitContentWidth: "real",
      leftInset: "real",
      leftPadding: "real",
      locale: "Locale",
      mirrored: "bool",
      padding: "real",
      palette: "palette",
      rightInset: "real",
      rightPadding: "real",
      spacing: "real",
      topInset: "real",
      topPadding: "real",
      verticalPadding: "real",
      visualFocus: "bool",
      wheelEnabled: "bool",
    },
    inherit: "Item",
  },
  ComboBox: {
    properties: {
      acceptableInput: "bool",
      count: "int",
      currentIndex: "int",
      currentText: "string",
      currentValue: "string",
      delegate: "Component",
      displayText: "string",
      down: "bool",
      editText: "string",
      editable: "bool",
      flat: "bool",
      highlightedIndex: "int",
      implicitIndicatorHeight: "real",
      implicitIndicatorWidth: "real",
      indicator: "Item",
      inputMethodComposing: "bool",
      inputMethodHints: "flags",
      model: "model",
      popup: "Popup",
      pressed: "bool",
      selectTextByMouse: "bool",
      textRole: "string",
      validator: "Validator",
      valueRole: "string",
    },
    signals: {
      accepted: "void-()",
      activated: "void-(int index)",
      highlighted: "void-(int index)",
    },
    methods: {
      decrementCurrentIndex: "void-()",
      find: "int-(string text, enumeration flags)",
      incrementCurrentIndex: "void-()",
      indexOfValue: "int-(object value)",
      selectAll: "void-()",
      textAt: "string-(int index)",
    },
    inherit: "Control",
  },
  MouseArea: {
    properties: {
      acceptedButtons: "Qt::MouseButtons",
      containsMouse: "bool",
      containsPress: "bool",
      cursorShape: "Qt::CursorShape",
      drag: {
        active: "bool",
        axis: "enumeration",
        filterChildren: "bool",
        maximumX: "real",
        maximumY: "real",
        minimumX: "real",
        minimumY: "real",
        smoothed: "bool",
        target: "Item",
        threshold: "real",
      },
      enabled: "bool",
      hoverEnabled: "bool",
      mouseX: "real",
      mouseY: "real",
      pressAndHoldInterval: "int",
      pressed: "bool",
      pressedButtons: "MouseButtons",
      preventStealing: "bool",
      propagateComposedEvents: "bool",
      scrollGestureEnabled: "bool",
    },
    signals: {
      canceled: "void-()",
      clicked: "void-(MouseEvent mouse)",
      doubleClicked: "void-(MouseEvent mouse)",
      entered: "void-()",
      exited: "void-()",
      positionChanged: "void-(MouseEvent mouse)",
      pressAndHold: "void-(MouseEvent mouse)",
      pressed: "void-(MouseEvent mouse)",
      released: "void-(MouseEvent mouse)",
      wheel: "void-(WheelEvent wheel)",
    },
    inherit: "Item",
  },
  Item: {
    properties: {
      activeFocus: "bool",
      activeFocusOnTab: "bool",
      anchors: {
        alignWhenCentered: "bool",
        baseline: "AnchorLine",
        baselineOffset: "real",
        bottom: "AnchorLine",
        bottomMargin: "real",
        centerIn: "Item",
        fill: "Item",
        horizontalCenter: "AnchorLine",
        horizontalCenterOffset: "real",
        left: "AnchorLine",
        leftMargin: "real",
        margins: "real",
        right: "AnchorLine",
        rightMargin: "real",
        top: "AnchorLine",
        topMargin: "real",
        verticalCenter: "AnchorLine",
        verticalCenterOffset: "real",
      },
      antialiasing: "bool",
      baselineOffset: "int",
      children: "list<Item>",
      childrenRect: {
        height: "real",
        width: "real",
        x: "real",
        y: "real",
      },
      clip: "bool",
      containmentMask: "QObject*",
      data: "list<Object> [default]",
      enabled: "bool",
      focus: "bool",
      height: "real",
      implicitHeight: "real",
      implicitWidth: "real",
      layer: {
        effect: "Component",
        enabled: "bool",
        format: "enumeration",
        mipmap: "bool",
        samplerName: "string",
        samples: "enumeration",
        smooth: "bool",
        sourceRect: "rect",
        textureMirroring: "enumeration",
        textureSize: "size",
        wrapMode: "enumeration",
      },
      opacity: "real",
      parent: "Item",
      resources: "list<Object>",
      rotation: "real",
      scale: "real",
      smooth: "bool",
      state: "string",
      states: "list<State>",
      transform: "list<Transform>",
      transformOrigin: "enumeration",
      transitions: "list<Transition>",
      visible: "bool",
      visibleChildren: "list<Item>",
      width: "real",
      x: "real",
      y: "real",
      z: "real",
    },
    methods: {
      childAt: "void-(real x, real y)",
      contains: "bool-(point point)",
      forceActiveFocus: ["void-(Qt::FocusReason reason)", "void-()"],
      grabToImage: "bool-(callback, targetSize)",
      mapFromGlobal: "object-(real x, real y)",
      mapFromItem: [
        "object-(Item item, rect r)",
        "object-(Item item, real x, real y, real width, real height)",
        "object-(Item item, point p)",
        "object-(Item item, real x, real y)",
      ],
      mapToGlobal: "object-(real x, real y)",
      mapToItem: [
        "object-(Item item, rect r)",
        "object-(Item item, real x, real y, real width, real height)",
        "object-(Item item, point p)",
        "object-(Item item, real x, real y)",
      ],
      nextItemInFocusChain: "void-(bool forward)",
    },
    inherit: "QtObject",
  },
  QtObject: {
    properties: {
      id: "any",
      objectName: "string",
    },
  },
};

export default References;