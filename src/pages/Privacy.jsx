import { constants } from "../utils/constants";

export function Privacy() {
return (
<main className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-md">
<header className="mb-6">
<h1 className="text-2xl font-semibold">Privacy Policy</h1>
<p className="text-sm text-gray-500 mt-1">Last updated: October 2025</p>
</header>


<section className="space-y-4 text-gray-800 leading-relaxed">
<p>We respect your privacy and are committed to protecting your personal information.</p>


<div>
<h2 className="text-lg font-medium">Information We Collect</h2>
<p className="mt-2">We may collect personal details (name, email, phone, address), payment and order details, and website usage data (cookies, analytics).</p>
</div>


<div>
<h2 className="text-lg font-medium">How We Use Your Information</h2>
<p className="mt-2">Your data helps us process orders, provide customer support, improve our website, and send updates or promotional offers (with consent).</p>
</div>


<div>
<h2 className="text-lg font-medium">Data Security</h2>
<p className="mt-2">We use secure servers and encryption to protect your personal data from unauthorized access or disclosure.</p>
</div>


<div>
<h2 className="text-lg font-medium">Third-Party Services</h2>
<p className="mt-2">We may share necessary data with trusted partners such as payment gateways and shipping providers solely to complete your transactions.</p>
</div>


<div>
<h2 className="text-lg font-medium">Your Rights</h2>
<p className="mt-2">You may request access, correction, or deletion of your data by contacting <a href={`mailto:${constants.SUPPORT_EMAIL}`} className="text-indigo-600 hover:underline">{constants.SUPPORT_EMAIL}</a>.</p>
</div>
</section>
</main>
);
}