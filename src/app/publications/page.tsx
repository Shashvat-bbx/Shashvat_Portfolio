// write the publications page here


// export default function PublicationsPage() {
//   const publications = [
//     {
//       title: "Audio Based Machine Fault Diagnosis using Hybrid Feature Extraction and Ensemble Learning",
//       authors: "Shashvat Singhal, Bhavya Goel, Kshitij Agrawal, Rithwick Sethi, Shashi Sah, Rachit Jain, Dinesh K Vishwakarma",
//       year: 2024,
//       link: "https://www.google.com",
//       description: "Description 1",
//       conference: "2024 15th International Conference on Computing Communication and Networking Technologies (ICCCNT)", 
//       bibtex: "@inproceedings{singhal2024audio,
//         title={Audio Based Machine Fault Diagnosis using Hybrid Feature Extraction and Ensemble Learning},
//         author={Singhal, Shashvat and Goel, Bhavya and Agrawal, Kshitij and Sethi, Rithwick and Sah, Shashi and Jain, Rachit and Vishwakarma, Dinesh K},
//         booktitle={2024 15th International Conference on Computing Communication and Networking Technologies (ICCCNT)},
//         pages={1--7},
//         year={2024},
//         organization={IEEE}
//       }",


//     },
//   ];
//   return (
//     <div>
//       <h1>This is the Publications Page</h1>

//       <div> 
//         {/* have a map which iterates over json object and prints all the div in flex row */}
        
//         <div> </div>
//       </div>
//     </div>
//   );
// }

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
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Publications</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {publications.map((pub, index) => (
          <div
            key={index}
            className="border rounded-2xl shadow-lg p-6 bg-white hover:shadow-xl transition-shadow"
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
