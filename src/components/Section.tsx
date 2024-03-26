export default function Section({
  leftContent,
  rightContent,
}: {
  leftContent: React.ReactNode;
  rightContent: React.ReactNode;
}) {
  return (
    <section className="section">
      <div className="sub-section">
        <div className="section-left">{leftContent}</div>
        <div className="section-right">{rightContent}</div>
      </div>
    </section>
  );
}
