import json as json

#make a function that writes in a json file the points of a derminate hour where points is a integer
def write_json(hour, points):
    if hour[:2] == 'M':
        hour.replace('M', 'me')
    points = int(points)
    with open('data/'+hour+'.json', 'w') as f:
        json.dumps(points, f)

#make a function that reads a json file and returns the points
def read_json(hour):
    if hour[:2] == 'M':
        hour.replace('M', 'me')
    with open('data/'+hour+'.json', 'r') as f:
        points = json.loads(f)
    points = int(points)
    return points

#make a function that executes the write_json function only if points is more than the result of read_json
def write_json_if_more(hour, points):
    if hour.startsWith('M'):
        hour.replace('M', 'me')
    points = int(points)
    if points > read_json(hour):
        write_json(hour, points)

#execute the main function asking for the hour and the points
def main():
    hour = input('Hour: ')
    points = input('Points: ')
    write_json(hour, points)

#execute the main function
if __name__ == '__main__':
    main()
