import { Task } from "@/components/task";
import { Conatiner } from "@/styles/theme";

export default function TaskList() {
  return (
    <Conatiner secondPage={true}>
      <Task title="Nova task" isChecked={true} />
      <Task title="Nova task" isChecked={true} />
      <Task title="Nova task" isChecked={false} />
      <Task title="Nova task" isChecked={false} />
      <Task title="Nova task" isChecked={true} />
    </Conatiner>
  );
}
