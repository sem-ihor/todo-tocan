const state = {
  layoutType: "vertical",
  layoutWidth: "fluid",
  leftSidebarType: "light",
  leftSidebarSize: "default",
  menuPosition: "fixed",
  topbar: "dark",
  loader: false,
  drawer: true,
  fixed: false,
  rightDrawer: false,
  right: true,
  windowSize: {
    x: 0,
    y: 0
  }
};

const getters = {
  drawer: state => state.drawer,
  fixed: state => state.fixed,
  rightDrawer: state => state.rightDrawer,
  right: state => state.right,
  windowSize: state => state.windowSize
};

const actions = {
  changeLayoutType({ commit }, { layoutType }) {
    commit("CHANGE_LAYOUT", layoutType);
  },

  changeLayoutWidth({ commit }, { layoutWidth }) {
    commit("CHANGE_LAYOUT_WIDTH", layoutWidth);
  },

  changeLeftSidebarType({ commit }, { leftSidebarType }) {
    commit("CHANGE_LEFT_SIDEBAR_TYPE", leftSidebarType);
  },

  changeLeftSidebarSize({ commit }, { leftSidebarSize }) {
    commit("CHANGE_LEFT_SIDEBAR_SIZE", leftSidebarSize);
  },

  changeTopbar({ commit }, { topbar }) {
    commit("CHANGE_TOPBAR", topbar);
  },

  changeLoaderValue({ commit }, { loader }) {
    commit("LOADER", loader);
  },

  changeMenuPosition({ commit }, { menuPosition }) {
    commit("CHANGE_POSITION", menuPosition);
  }
};

const mutations = {
  CHANGE_LAYOUT(state, layoutType) {
    state.layoutType = layoutType;
  },
  CHANGE_LAYOUT_WIDTH(state, layoutWidth) {
    state.layoutWidth = layoutWidth;
  },
  CHANGE_LEFT_SIDEBAR_TYPE(state, leftSidebarType) {
    state.leftSidebarType = leftSidebarType;
  },
  CHANGE_LEFT_SIDEBAR_SIZE(state, leftSidebarSize) {
    state.leftSidebarSize = leftSidebarSize;
  },
  CHANGE_TOPBAR(state, topbar) {
    state.topbar = topbar;
  },
  LOADER(state, loader) {
    state.loader = loader;
  },
  CHANGE_POSITION(state, menuPosition) {
    state.menuPosition = menuPosition;
  },
  CHANGE_DRAWER(state) {
    state.drawer = !state.drawer;
  },
  CHANGE_POSITION_FOOTER(state) {
    state.fixed = !state.fixed;
  },
  CHANGE_RIGHT_DRAWER(state) {
    state.rightDrawer = !state.rightDrawer;
  },
  CHANGE_POSITION_DRAWER(state) {
    state.right = !state.right;
  },
  CHANGE_SIZE_WINDOW(state, windowSize) {
    state.windowSize = windowSize;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
