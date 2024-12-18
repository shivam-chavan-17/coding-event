import Layout from "@/components/Layout";

export default function Schedule() {
    return (
        <Layout>
            <h2 className="text-2xl font-bold text-gray-800">Event Schedule</h2>
            <ul className="mt-4 text-gray-600">
                <li className="mb-2">
                    <strong>9:00 AM - 10:00 AM:</strong> Registration and Welcome.
                </li>
                <li className="mb-2">
                    <strong>10:00 AM - 12:00 PM:</strong> Coding Challenge - Round 1.
                </li>
                <li className="mb-2">
                    <strong>12:00 PM - 1:00 PM:</strong> Lunch Break.
                </li>
                <li className="mb-2">
                    <strong>1:00 PM - 3:00 PM:</strong> Coding Challenge - Round 2.
                </li>
                <li className="mb-2">
                    <strong>3:00 PM - 4:00 PM:</strong> Networking and Guest Talk.
                </li>
                <li className="mb-2">
                    <strong>4:00 PM - 5:00 PM:</strong> Prize Distribution and Closing Ceremony.
                </li>
            </ul>
        </Layout>
    );
}