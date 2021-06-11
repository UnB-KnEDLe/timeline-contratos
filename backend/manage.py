from flask.cli import FlaskGroup

from api import create_app, db

app = create_app()
cli = FlaskGroup(create_app=create_app)


@cli.command('recreate_db')
def recreate_db():
    db.drop_all()
    db.create_all()
    db.session.commit()
    print("DB reacreated")



if __name__ == '__main__':
    cli()
