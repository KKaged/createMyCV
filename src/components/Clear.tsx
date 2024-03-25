export default function Clear({
  onClearClick,
  onClickLoad,
}: {
  onClearClick: any;
  onClickLoad: any;
}) {
  return (
    <div>
      <button onClick={onClearClick}>Clear</button>
      <button onClick={onClickLoad}>Load Example</button>
    </div>
  );
}
