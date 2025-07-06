

export default function PublicationsPage() {
  const publications = [
    {
      title:
        "Audio Based Machine Fault Diagnosis using Hybrid Feature Extraction and Ensemble Learning",
      authors:
        "Shashvat Singhal, Bhavya Goel, Kshitij Agrawal, Rithwick Sethi, Shashi Sah, Rachit Jain, Dinesh K Vishwakarma",
      year: 2024,
      link: "https://www.google.com",
      description: "A novel approach for fault diagnosis using audio signals.",
      conference:
        "2024 15th International Conference on Computing Communication and Networking Technologies (ICCCNT)",
      bibtex: `@inproceedings{singhal2024audio,
        title={Audio Based Machine Fault Diagnosis using Hybrid Feature Extraction and Ensemble Learning},
        author={Singhal, Shashvat and Goel, Bhavya and Agrawal, Kshitij and Sethi, Rithwick and Sah, Shashi and Jain, Rachit and Vishwakarma, Dinesh K},
        booktitle={2024 15th International Conference on Computing Communication and Networking Technologies (ICCCNT)},
        pages={1--7},
        year={2024},
        organization={IEEE}
      }`,
    },
    {
      title:
        "DSeP-xNet: A Feature Optimized Ensemble Framework for Hyperspectral-Based Soil Organic Carbon Predictiong",
      authors:
        "Akshyat Shah, Shashi Sah, Shashvat Singhal, Shagun Jain, Divyashikha Sethi",
      year: 2025,
      link: "https://ieeexplore.ieee.org/document/11051496",
      description: "A novel approach for precision agriculture using hyperspectral imaging and machine learning.",
      conference:
        "2024 International Conference on Augmented Reality, Intelligent Systems, and Industrial Automation (ARIIA)",
      bibtex: `@INPROCEEDINGS{11051496,
  author={Shah, Akshyat and Sah, Shashi and Singhal, Shashvat and Jain, Shagun and Sethi, Divyashikha},
  booktitle={2024 International Conference on Augmented Reality, Intelligent Systems, and Industrial Automation (ARIIA)}, 
  title={DSeP-xNet: A Feature Optimized Ensemble Framework for Hyperspectral-Based Soil Organic Carbon Prediction}, 
  year={2024},
  volume={},
  number={},
  pages={1-8},
  keywords={Surveys;Accuracy;Soil measurements;Soil;Predictive models;Feature extraction;Nutrients;Data models;Carbon;Hyperspectral imaging;Soil Organic Carbon;Feature Selection;Ensemble Technique;Hyperspectral;Artificial Intelligence},
  doi={10.1109/ARIIA63345.2024.11051496}}
`,
    },
    {
      title:"Boosting ML Techniques for Dementia Prediction Using Modifiable and Non-Modifiable Risk Factors",
      authors:
        "Navjeet Singh kukreja, Shashvat Singhal,  Divyashikha Sethi",
      year: 2025,
      link: "https://www.linkedin.com/posts/shashvat-singhal_aaic2025-neuroscience-machinelearning-activity-7305912639757369346-5dDb?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEHdp1QBtctgLbFWPqwd1hfCBVkvpHcFVG0",
      description: "A novel approach for dementia prediction using machine learning.",
      conference:
        "AAIC Neuroscience Next 2025",
      bibtex: `
`,
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-5xl mb-6 ">Publications</h1>

      <div className="flex flex-col gap-4">
        {publications.map((pub, index) => (
          <div
            key={index}
            className=" rounded-2xl shadow-lg p-6  hover:shadow-xl transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{pub.title}</h2>
            <p className="text-sm mb-1 text-gray-700">
              <strong>Authors:</strong> {pub.authors}
            </p>
            <p className="text-sm mb-1 text-gray-700">
              <strong>Conference:</strong> {pub.conference}
            </p>
            <p className="text-sm mb-2 text-gray-700">
              <strong>Year:</strong> {pub.year}
            </p>
            <p className="text-sm mb-4">{pub.description}</p>
            <div className="flex flex-wrap gap-3">
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View Paper
              </a>
              <details className="text-sm text-gray-600">
                <summary className="cursor-pointer">BibTeX</summary>
                <pre className="whitespace-pre-wrap text-xs mt-2">{pub.bibtex}</pre>
              </details>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
