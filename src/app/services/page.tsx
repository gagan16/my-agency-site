export default function Services() {
  return (
    <section className="max-w-5xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-2">Workflow Automation</h2>
          <p>Streamline repetitive tasks using Zapier, Make.com, and custom APIs to save time and reduce errors.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-2">Data Dashboards</h2>
          <p>Build interactive Power BI dashboards connected to Azure SQL, Excel, and SharePoint for better decision-making.</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-2">Cloud Data Pipelines</h2>
          <p>Migrate and transform data from on-premises systems to the cloud using Azure Data Factory and modern ETL processes.</p>
        </div>
      </div>
    </section>
  );
}
