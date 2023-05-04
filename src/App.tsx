
import { useState } from 'react'
import Alert from './components/Alert'
import Button from './components/Button'
import ExxpandedTest from './components/ExxpandedTest';
import { Form } from './components/Form';
import ExpenseList from './expense-tracker/components/ExpenseList';
import ExpenseFilter from './expense-tracker/components/ExpenseFilter';
import ExpenseForm from './expense-tracker/components/ExpenseForm';

export const categories = ['Groceries', 'Utilities', 'Entertainment'];

function App() {
  
  const [alertVisible, setAlertVisibility] = useState(false);
  const items = ["Delhi", "Mumbai", "Chennai"];
  const [game, setGame] = useState({
    id: 1, 
    player: {
      name: 'john', 
    },
  });

  const handleClick = () =>
  {
    setGame({ ...game, player: { ...game.player, name: 'raj' } })
    console.log("Chnaged")
  }
  
  const [expenses, setExpenses]= useState([
    { id: 1, description: 'Hoa', amount: 2, category: 'Utilities' },
    { id: 2, description: 'Curd', amount: 3, category: 'Groceries' },
    { id: 3, description: 'Dal', amount: 6, category: 'Groceries' },
    { id: 4, description: 'Electricity', amount: 6, category: 'Utilities' }
    
  ]);
  
  const [selectedCategory, setSelectedCategory] = useState('');

  const visibleExpenses = selectedCategory ? expenses.filter((e) => e.category === selectedCategory) : expenses;
  
  return (
    <>
    {alertVisible && <Alert onClose={()=> setAlertVisibility(false)}>Test</Alert>}
    <Button color="danger" onClickk={() => setAlertVisibility(true)}>Appdev</Button>
      <h3>List</h3>
      <p>{game.id}, {game.player.name}</p>
    <Button color="danger" onClickk={handleClick}>Appdev</Button>

    <ul className="list-group">
    {items.map((item) => (<li className="list-group-item" key={item}>{item}</li>))}
      </ul> 

      <ExxpandedTest maxChars={100}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi inventore dicta, minima nesciunt exercitationem mollitia quo quod distinctio modi perspiciatis maxime amet saepe in, molestias dolorem at aperiam neque ratione. Aut sapiente atque soluta! Labore incidunt quo illum similique id magnam quisquam eos ipsum obcaecati, quaerat aut rerum excepturi enim velit cumque, sint alias est nulla tempora iure itaque nihil nostrum fugit tenetur. Est sed dolore deleniti perferendis nulla exercitationem iure fuga rerum at repellendus debitis eaque, eos, cupiditate atque qui nam possimus porro assumenda harum aut illum, nemo incidunt magni ipsam! Accusantium aliquid beatae aspernatur quos ipsam, provident quidem?</ExxpandedTest>
      <div className="mb-3">

      <ExpenseForm  />

      </div>
      <ExpenseFilter onSelectCategory={(category)=> setSelectedCategory(category)}/>
      <ExpenseList expenses={visibleExpenses} onDelete={(id)=> setExpenses(expenses.filter((e)=> e.id != id))}/> 
    </>
  )
}

export default App
