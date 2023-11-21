import './spinner.css';

export default function Spinner(): JSX.Element {
  return (
    <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
  );
}
