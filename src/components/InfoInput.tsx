export default function InfoInputs({
  labelFor,
  onChange,
}: {
  labelFor: any;
  onChange: any;
}) {
  return (
    <>
      <label htmlFor={labelFor}>{labelFor}</label>
      <input type="text" onChange={onChange} />
    </>
  );
}
