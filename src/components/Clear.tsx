export default function Clear({
  onClearClick,
  onClickLoad,
}: {
  onClearClick: any;
  onClickLoad: any;
}) {
  return (
    <div className="clear-container">
      <button className="clear" onClick={onClearClick}>
        Clear
      </button>
      <button className="load" onClick={onClickLoad}>
        Load Example
      </button>
    </div>
  );
}
