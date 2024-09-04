import Card from "./Card";

function ProfileCard(props) {
	return (
		<div>
			<Card title="Iron Man" backgroundColor="#f2a367">
				<p>I'm IronMan</p>
				<p>Blah...</p>
			</Card>

			<Card title="Captain America" backgroundColor="#f50010">
				<p>I'm Steve Rogers.</p>
				<p>Blah...</p>
			</Card>

		</div>

		
	);
}

export default ProfileCard;