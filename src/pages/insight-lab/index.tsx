import { GetInTouch } from "@/components/shared/get-in-touch";
import { useState } from "react";
import { Dialog } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const reports = [
  {
    id: 1,
    title: "Web3 Market Trends 2024",
    coverImage: "/images/reports/web3-trends.jpg", // Add actual image path
    pdfUrl: "/reports/web3-trends.pdf", // Add actual PDF path
  },
  // Add more reports as needed
];

const InsightLabPage = () => {
  const [selectedReport, setSelectedReport] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    linkedin: "",
    company: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission and PDF download
    if (selectedReport) {
      // Download logic here
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      window.open(selectedReport.pdfUrl, "_blank");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Our Insight Lab</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
          At Khiza, we dive deep into technology and fintech markets to identify
          emerging trends and innovations. Our insight lab provides carefully
          crafted reports, shedding light on the future of web3 and offering
          valuable perspectives for industry leaders.
        </p>
        <p className="text-lg font-medium mb-12">
          Explore our latest reports below and stay ahead of the curve!
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reports.map((report) => (
          <div
            key={report.id}
            className="cursor-pointer rounded-lg shadow-lg overflow-hidden"
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            onClick={() => setSelectedReport(report)}
          >
            <img
              src={report.coverImage}
              alt={report.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{report.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <Dialog
        open={!!selectedReport}
        onOpenChange={() => setSelectedReport(null)}
      >
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Download Report</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1">Name*</label>
              <Input
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block mb-1">Email*</label>
              <Input
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block mb-1">LinkedIn*</label>
              <Input
                required
                value={formData.linkedin}
                onChange={(e) =>
                  setFormData({ ...formData, linkedin: e.target.value })
                }
              />
            </div>
            <div>
              <label className="block mb-1">Company</label>
              <Input
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
              />
            </div>
            <Button type="submit" className="w-full">
              Download Report
            </Button>
          </form>
        </div>
      </Dialog>

      <GetInTouch />
    </div>
  );
};

export default InsightLabPage;
