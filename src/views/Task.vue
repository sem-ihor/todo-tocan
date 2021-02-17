<template>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th v-html="specialCharacters" class="text-left"></th>
          <th class="text-left">
            task_id
          </th>
          <th class="text-left">
            task_title
          </th>
          <th class="text-left">
            task_description
          </th>
          <th class="text-left">
            task_person_id
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(task, index) in tasks" :key="task.task_id">
          <td>{{ index }}</td>
          <td>{{ task.task_id }}</td>
          <td>{{ task.task_title }}</td>
          <td>{{ task.task_description }}</td>
          <td>{{ task.task_person_id }}</td>
          <td>1</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  name: "Task",
  data() {
    return {
      specialCharacters: "&#8470",
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159
        },
        {
          name: "Ice cream sandwich",
          calories: 237
        },
        {
          name: "Eclair",
          calories: 262
        },
        {
          name: "Cupcake",
          calories: 305
        },
        {
          name: "Gingerbread",
          calories: 356
        },
        {
          name: "Jelly bean",
          calories: 375
        },
        {
          name: "Lollipop",
          calories: 392
        },
        {
          name: "Honeycomb",
          calories: 408
        },
        {
          name: "Donut",
          calories: 452
        },
        {
          name: "KitKat",
          calories: 518
        }
      ]
    };
  },
  computed: {
    tasks() {
      return this.$store.getters["tasks"];
    }
  }
};
</script>

<style scoped></style>
