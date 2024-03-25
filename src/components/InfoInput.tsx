export default function InfoInputs({
  labelFor,
  onChange,
}: {
  labelFor: any;
  onChange: any;
}) {
  return (
    <div className="input-group">
      <label htmlFor={labelFor}>{labelFor}</label>
      <input type="text" onChange={onChange} />
    </div>
  );
}
