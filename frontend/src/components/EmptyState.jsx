export default function EmptyState({ type, title, description, actionButton = null }) {
  const defaultMessages = {
    no_problems: {
      title: "No problems posted yet",
      description: "Check back soon. Industry partners are onboarding and will start posting challenges.",
    },
    no_problems_category: {
      title: "No problems in this category",
      description: "We are currently onboarding researchers in this area. New opportunities will appear here soon.",
    },
    no_interested_projects: {
      title: "No interested projects yet",
      description: "Browse and express interest in projects to see them here.",
    },
    no_projects_researcher: {
      title: "No projects created yet",
      description: "Create a new research project to start collaborating with industry partners.",
    },
    no_projects_filtered: {
      title: "No projects match your search",
      description: "This category is new. Early collaborators are welcome. Try adjusting your filters or browsing all projects.",
    },
  };

  const message = defaultMessages[type] || { title, description };

  return (
    <div className="rounded-lg bg-white p-8 text-center shadow">
      <h3 className="text-lg font-semibold text-gray-700">
        {message.title}
      </h3>
      <p className="text-gray-500 mt-2">
        {message.description}
      </p>
      {actionButton && (
        <div className="mt-4">
          {actionButton}
        </div>
      )}
    </div>
  );
}
