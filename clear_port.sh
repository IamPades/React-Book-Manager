# Save the script to a file named clear_port.sh
#!/bin/bash

PORT=4001
echo "Finding process using port $PORT..."

PID=$(sudo lsof -t -i:$PORT)

if [ -z "$PID" ]
then
    echo "No process is using port $PORT."
else
    echo "Process $PID found using port $PORT. Attempting to kill..."
    sudo kill -9 $PID
    echo "Process killed."
fi
