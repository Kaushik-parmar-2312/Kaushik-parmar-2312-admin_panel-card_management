<!-- src/components/AdminPanel.vue -->
<template>
  <div class="admin-panel">
    <aside class="sidebar">
      <img
        src="../assets/logo.png"
        style="height: 100px; margin-bottom: 20px"
      />
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <hr />
        <li><router-link to="/users">Cards</router-link></li>
        <hr />
        <li><router-link to="/users">Transactions</router-link></li>
        <hr />
        <li><router-link to="/settings">Settings</router-link></li>
      </ul>
    </aside>
    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: "AdminPanel",
};
</script>

<style>
.admin-panel {
  display: flex;
  height: 100vh;
  overflow: scroll;
  font-family: roboto, "sans serif";
}
.sidebar {
  width: 240px;
  background: #0c3c64;
  color: white;
  padding: 16px;
  text-align: left;
}
.sidebar ul {
  list-style-type: none;
  padding: 0;
}
.sidebar ul li {
  margin: 14px 0;
  font-family: roboto;
}
.slidebar ul li:hover {
  color: #52b3d9;
}
.sidebar ul li a {
  color: white;
  text-decoration: none;
}
.main-content {
  flex-grow: 1;
}
</style>
